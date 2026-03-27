import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Card } from './card';

describe('Card', () => {
  it('renders with just children', () => {
    render(<Card data-testid="card">Content</Card>);
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders title', () => {
    render(<Card title="My Title">Content</Card>);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My Title');
  });

  it('renders title and description', () => {
    render(
      <Card title="My Title" description="Some description">
        Content
      </Card>
    );
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('My Title');
    expect(screen.getByText('Some description')).toBeInTheDocument();
  });

  it('renders badge next to title', () => {
    render(
      <Card title="Status" badge={{ children: 'Active', variant: 'default' }}>
        Content
      </Card>
    );
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Status');
  });

  it('renders footer', () => {
    render(<Card footer={<button type="button">Action</button>}>Content</Card>);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('renders full card with all props', () => {
    render(
      <Card
        title="Revenue"
        description="March 2026"
        badge={{ children: '+8%', variant: 'default' }}
        footer={<span>Updated today</span>}
        data-testid="card"
      >
        <span>$45,231</span>
      </Card>
    );
    expect(screen.getByTestId('card')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Revenue');
    expect(screen.getByText('March 2026')).toBeInTheDocument();
    expect(screen.getByText('+8%')).toBeInTheDocument();
    expect(screen.getByText('$45,231')).toBeInTheDocument();
    expect(screen.getByText('Updated today')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    let cardRef: HTMLDivElement | null = null;
    render(
      <Card
        ref={(ref) => {
          cardRef = ref;
        }}
      >
        Content
      </Card>
    );
    expect(cardRef).toBeInstanceOf(HTMLDivElement);
  });

  it('merges className', () => {
    render(
      <Card data-testid="card" className="custom-class">
        Content
      </Card>
    );
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });
});
