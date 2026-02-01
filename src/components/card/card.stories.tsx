import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Basic card
export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-white/70">
          This is the card content. It can contain any content you want.
        </p>
      </CardContent>
    </Card>
  ),
};

// With footer
export const WithFooter: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {['Meeting at 2pm', 'New comment on your post', 'System update available'].map(
            (item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm"
              >
                <Icon name="bell" size="sm" className="text-primary" />
                {item}
              </div>
            )
          )}
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <button
          type="button"
          className="text-sm text-muted-foreground transition-colors hover:text-white"
        >
          Mark all as read
        </button>
        <button type="button" className="text-sm text-primary transition-colors hover:text-primary/80">
          View all
        </button>
      </CardFooter>
    </Card>
  ),
};

// Stats card
export const Stats: Story = {
  render: () => (
    <div className="flex gap-4">
      {[
        { label: 'Total Users', value: '2,543', icon: 'users' as const, trend: '+12%' },
        { label: 'Revenue', value: '$45.2k', icon: 'star' as const, trend: '+8%' },
        { label: 'Active Now', value: '573', icon: 'eye' as const, trend: '-2%' },
      ].map((stat) => (
        <Card key={stat.label} className="w-[200px]">
          <CardContent className="pt-5">
            <div className="flex items-center justify-between">
              <Icon name={stat.icon} size="md" className="text-primary" />
              <span
                className={`text-xs ${stat.trend.startsWith('+') ? 'text-success' : 'text-destructive'}`}
              >
                {stat.trend}
              </span>
            </div>
            <div className="mt-3">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  ),
};
