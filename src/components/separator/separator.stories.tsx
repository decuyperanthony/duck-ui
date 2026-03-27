import type { Meta, StoryObj } from '@storybook/react';

import { Separator } from './separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {
  render: () => (
    <div className="w-64 space-y-4">
      <p className="text-sm text-foreground">Above the separator</p>
      <Separator />
      <p className="text-sm text-foreground">Below the separator</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-4">
      <span className="text-sm text-foreground">Left</span>
      <Separator orientation="vertical" />
      <span className="text-sm text-foreground">Right</span>
    </div>
  ),
};
