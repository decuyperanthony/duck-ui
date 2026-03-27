import type { Meta, StoryObj } from '@storybook/react';

import { Typography, type TypographyVariant } from './typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'lead', 'small', 'caption'],
      description: 'Typography variant',
    },
    weight: {
      control: 'select',
      options: ['regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight override',
    },
    color: {
      control: 'select',
      options: ['foreground', 'muted', 'primary', 'destructive', 'inherit'],
      description: 'Text color',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: 'The quick brown fox jumps over the lazy dog.',
  },
};

const allVariants: TypographyVariant[] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'lead',
  'body',
  'small',
  'caption',
];

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      {allVariants.map((variant) => (
        <Typography key={variant} variant={variant}>
          {variant} — The quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </div>
  ),
};

export const WithWeights: Story = {
  render: () => (
    <div className="space-y-3">
      {(['regular', 'medium', 'semibold', 'bold'] as const).map((weight) => (
        <Typography key={weight} weight={weight}>
          {weight} — The quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </div>
  ),
};

export const WithColors: Story = {
  render: () => (
    <div className="space-y-3">
      {(['foreground', 'muted', 'primary', 'destructive', 'inherit'] as const).map((color) => (
        <Typography key={color} color={color}>
          {color} — The quick brown fox jumps over the lazy dog.
        </Typography>
      ))}
    </div>
  ),
};

export const CustomTag: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography variant="h1" as="span">
        h1 variant rendered as a span
      </Typography>
      <Typography variant="body" as="label">
        body variant rendered as a label
      </Typography>
      <Typography variant="caption" as="li">
        caption variant rendered as a li
      </Typography>
    </div>
  ),
};

export const Combined: Story = {
  render: () => (
    <div className="space-y-3">
      <Typography variant="h2" weight="bold" color="primary">
        Bold primary heading
      </Typography>
      <Typography variant="lead" color="muted" align="center">
        Centered muted lead text
      </Typography>
      <Typography variant="caption" weight="medium" color="destructive" align="right">
        Right-aligned destructive caption
      </Typography>
    </div>
  ),
};
