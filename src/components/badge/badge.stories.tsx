import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';

import { Badge } from './badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
      <Badge variant="link">Link</Badge>
    </div>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge>
        <Icon name="check" size="xs" />
        Active
      </Badge>
      <Badge variant="destructive">
        <Icon name="x" size="xs" />
        Removed
      </Badge>
      <Badge variant="secondary">
        <Icon name="clock" size="xs" />
        Pending
      </Badge>
    </div>
  ),
};
