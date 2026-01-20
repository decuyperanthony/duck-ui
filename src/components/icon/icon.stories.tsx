import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './icon';
import { iconNames } from './icon-registry';
import { iconSizes } from './types';

import type { IconSize } from './types';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: iconNames,
      description: 'Icon name from the registry',
    },
    size: {
      control: 'select',
      options: Object.keys(iconSizes),
      description: 'Size preset',
    },
    strokeWidth: {
      control: { type: 'range', min: 1, max: 3, step: 0.5 },
      description: 'Stroke width',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

// Basic usage
export const Default: Story = {
  args: {
    name: 'check',
    size: 'md',
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      {(Object.keys(iconSizes) as IconSize[]).map((size) => (
        <div key={size} className="flex flex-col items-center gap-2">
          <Icon name="star" size={size} className="text-primary" />
          <span className="text-xs text-muted-foreground">
            {size} ({iconSizes[size]}px)
          </span>
        </div>
      ))}
    </div>
  ),
};

// Stroke widths
export const StrokeWidths: Story = {
  render: () => (
    <div className="flex items-center gap-6">
      {[1, 1.5, 2, 2.5, 3].map((width) => (
        <div key={width} className="flex flex-col items-center gap-2">
          <Icon name="heart" size="lg" strokeWidth={width} className="text-accent" />
          <span className="text-xs text-muted-foreground">{width}</span>
        </div>
      ))}
    </div>
  ),
};

// Color variants
export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="check-circle" size="lg" className="text-primary" />
      <Icon name="alert-circle" size="lg" className="text-destructive" />
      <Icon name="info" size="lg" className="text-accent" />
      <Icon name="alert-triangle" size="lg" className="text-warning" />
      <Icon name="check" size="lg" className="text-success" />
    </div>
  ),
};

// Icon gallery - all icons
export const Gallery: Story = {
  render: () => (
    <div className="grid grid-cols-8 gap-4">
      {iconNames.map((name) => (
        <div
          key={name}
          className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3"
        >
          <Icon name={name} size="md" className="text-foreground" />
          <span className="text-center text-[10px] text-muted-foreground">{name}</span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Copy-paste helper
export const CopyHelper: Story = {
  render: () => {
    const copyToClipboard = (text: string) => {
      void navigator.clipboard.writeText(text);
    };

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">Click an icon to copy its import code</p>
        <div className="grid grid-cols-6 gap-3">
          {iconNames.slice(0, 24).map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => { copyToClipboard(`<Icon name="${name}" />`); }}
              className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-3 transition-colors hover:border-primary/50 hover:bg-primary/10"
            >
              <Icon name={name} size="md" />
              <span className="text-[10px] text-muted-foreground">{name}</span>
            </button>
          ))}
        </div>
      </div>
    );
  },
  parameters: {
    layout: 'padded',
  },
};
