import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../icon';

import { Alert, AlertDescription, AlertTitle } from './alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

// Default
export const Default: Story = {
  render: () => (
    <Alert className="max-w-md">
      <Icon name="info" size="sm" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>You can add components to your app using the CLI.</AlertDescription>
    </Alert>
  ),
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert className="max-w-md">
        <Icon name="info" size="sm" />
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>This is a default alert message.</AlertDescription>
      </Alert>

      <Alert variant="success" className="max-w-md">
        <Icon name="check-circle" size="sm" />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>Your changes have been saved successfully.</AlertDescription>
      </Alert>

      <Alert variant="warning" className="max-w-md">
        <Icon name="alert-triangle" size="sm" />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This action cannot be undone.</AlertDescription>
      </Alert>

      <Alert variant="destructive" className="max-w-md">
        <Icon name="x-circle" size="sm" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </Alert>

      <Alert variant="info" className="max-w-md">
        <Icon name="info" size="sm" />
        <AlertTitle>Info</AlertTitle>
        <AlertDescription>A new software update is available.</AlertDescription>
      </Alert>
    </div>
  ),
};
