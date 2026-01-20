import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Alert, AlertDescription, AlertTitle } from './alert';

describe('Alert', () => {
  it('renders without crashing', () => {
    render(<Alert data-testid="alert">Content</Alert>);
    expect(screen.getByTestId('alert')).toBeInTheDocument();
  });

  it('has role="alert"', () => {
    render(<Alert>Content</Alert>);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Alert>Alert content</Alert>);
    expect(screen.getByText('Alert content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Alert data-testid="alert" />);
    const alert = screen.getByTestId('alert');
    expect(alert).toHaveClass('rounded-2xl');
    expect(alert).toHaveClass('border');
    expect(alert).toHaveClass('bg-white/5');
  });

  describe('variants', () => {
    it('renders destructive variant', () => {
      render(<Alert data-testid="alert" variant="destructive" />);
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('border-destructive/50');
      expect(alert).toHaveClass('bg-destructive/10');
    });

    it('renders success variant', () => {
      render(<Alert data-testid="alert" variant="success" />);
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('border-success/30');
      expect(alert).toHaveClass('bg-success/10');
    });

    it('renders warning variant', () => {
      render(<Alert data-testid="alert" variant="warning" />);
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('border-warning/30');
      expect(alert).toHaveClass('bg-warning/10');
    });

    it('renders info variant', () => {
      render(<Alert data-testid="alert" variant="info" />);
      const alert = screen.getByTestId('alert');
      expect(alert).toHaveClass('border-info/30');
      expect(alert).toHaveClass('bg-info/10');
    });
  });

  it('merges custom className', () => {
    render(<Alert data-testid="alert" className="custom-class" />);
    const alert = screen.getByTestId('alert');
    expect(alert).toHaveClass('custom-class');
    expect(alert).toHaveClass('rounded-2xl');
  });

  it('forwards ref', () => {
    let alertRef: HTMLDivElement | null = null;
    render(
      <Alert
        ref={(ref) => {
          alertRef = ref;
        }}
      />
    );
    expect(alertRef).toBeInstanceOf(HTMLDivElement);
  });
});

describe('AlertTitle', () => {
  it('renders as h5 element', () => {
    render(<AlertTitle>Title</AlertTitle>);
    const title = screen.getByText('Title');
    expect(title.tagName).toBe('H5');
  });

  it('renders with correct classes', () => {
    render(<AlertTitle data-testid="title">Title</AlertTitle>);
    const title = screen.getByTestId('title');
    expect(title).toHaveClass('font-semibold');
    expect(title).toHaveClass('text-white');
  });
});

describe('AlertDescription', () => {
  it('renders with muted text', () => {
    render(<AlertDescription data-testid="desc">Description</AlertDescription>);
    expect(screen.getByTestId('desc')).toHaveClass('text-white/70');
  });
});

describe('Alert composition', () => {
  it('renders a complete alert with icon', () => {
    render(
      <Alert data-testid="alert" variant="success">
        <svg data-testid="icon" />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>Your changes have been saved.</AlertDescription>
      </Alert>
    );

    expect(screen.getByTestId('alert')).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByText('Success!')).toBeInTheDocument();
    expect(screen.getByText('Your changes have been saved.')).toBeInTheDocument();
  });
});
