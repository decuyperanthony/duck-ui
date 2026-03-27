import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Badge } from './badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    render(<Badge data-testid="badge">Label</Badge>);
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('renders as a span element', () => {
    render(<Badge data-testid="badge">Label</Badge>);
    expect(screen.getByTestId('badge').tagName).toBe('SPAN');
  });

  it('renders children text', () => {
    render(<Badge>Active</Badge>);
    expect(screen.getByText('Active')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Badge data-testid="badge">Label</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('bg-primary');
    expect(badge).toHaveClass('text-primary-foreground');
  });

  describe('variants', () => {
    it('renders secondary variant', () => {
      render(<Badge data-testid="badge" variant="secondary">Secondary</Badge>);
      expect(screen.getByTestId('badge')).toHaveClass('bg-secondary');
    });

    it('renders destructive variant', () => {
      render(<Badge data-testid="badge" variant="destructive">Error</Badge>);
      expect(screen.getByTestId('badge')).toHaveClass('bg-destructive');
    });

    it('renders outline variant', () => {
      render(<Badge data-testid="badge" variant="outline">Outline</Badge>);
      expect(screen.getByTestId('badge')).toHaveClass('border-border');
    });

    it('renders ghost variant', () => {
      render(<Badge data-testid="badge" variant="ghost">Ghost</Badge>);
      expect(screen.getByTestId('badge')).toHaveClass('rounded-full');
    });

    it('renders link variant', () => {
      render(<Badge data-testid="badge" variant="link">Link</Badge>);
      expect(screen.getByTestId('badge')).toHaveClass('text-primary');
    });
  });

  it('merges custom className', () => {
    render(<Badge data-testid="badge" className="custom-class">Label</Badge>);
    const badge = screen.getByTestId('badge');
    expect(badge).toHaveClass('custom-class');
    expect(badge).toHaveClass('bg-primary');
  });

  it('forwards ref', () => {
    let badgeRef: HTMLSpanElement | null = null;
    render(
      <Badge
        ref={(ref) => {
          badgeRef = ref;
        }}
      >
        Label
      </Badge>
    );
    expect(badgeRef).toBeInstanceOf(HTMLSpanElement);
  });
});
