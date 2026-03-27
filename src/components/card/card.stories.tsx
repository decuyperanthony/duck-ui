import type { Meta, StoryObj } from '@storybook/react';

import { Card } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Card title' },
    description: { control: 'text', description: 'Card description below the title' },
    footer: { control: false, description: 'Footer content' },
    badge: { control: 'object', description: 'Badge displayed next to the title' },
  },
  decorators: [(Story) => <div className="w-[350px]"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: (
      <p className="text-sm text-white/70">
        This is the card content. It can contain any content you want.
      </p>
    ),
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Notifications',
    children: (
      <p className="text-sm text-white/70">You have 3 unread messages.</p>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    title: 'Notifications',
    description: 'You have 3 unread messages',
    children: (
      <div className="space-y-2">
        {['Meeting at 2pm', 'New comment on your post', 'System update available'].map((item) => (
          <div key={item} className="rounded-lg bg-white/5 px-3 py-2 text-sm">
            {item}
          </div>
        ))}
      </div>
    ),
  },
};

export const WithBadge: Story = {
  args: {
    title: 'Status',
    badge: { children: 'Active', variant: 'default' },
    children: (
      <p className="text-sm text-white/70">All systems operational.</p>
    ),
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Notifications',
    children: (
      <p className="text-sm text-white/70">You have 3 unread messages.</p>
    ),
    footer: (
      <button
        type="button"
        className="text-sm text-primary transition-colors hover:text-primary/80"
      >
        View all
      </button>
    ),
  },
};

export const Complete: Story = {
  args: {
    title: 'Revenue',
    description: 'March 2026',
    badge: { children: '+8%', variant: 'default' },
    children: (
      <p className="text-4xl font-bold text-white">$45,231.89</p>
    ),
    footer: (
      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
    ),
  },
};
