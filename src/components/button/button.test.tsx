import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { Button } from './button';

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button data-testid="btn">Click me</Button>);
    expect(screen.getByTestId('btn')).toBeInTheDocument();
  });

  it('renders as a button element', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    render(<Button data-testid="btn">Click me</Button>);
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveClass('bg-primary');
    expect(btn).toHaveClass('text-primary-foreground');
  });

  describe('variants', () => {
    it('renders destructive variant', () => {
      render(<Button data-testid="btn" variant="destructive">Delete</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('bg-destructive');
    });

    it('renders outline variant', () => {
      render(<Button data-testid="btn" variant="outline">Outline</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('border');
    });

    it('renders secondary variant', () => {
      render(<Button data-testid="btn" variant="secondary">Secondary</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('bg-secondary');
    });

    it('renders ghost variant', () => {
      render(<Button data-testid="btn" variant="ghost">Ghost</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('hover:bg-accent');
    });

    it('renders link variant', () => {
      render(<Button data-testid="btn" variant="link">Link</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('underline-offset-4');
    });
  });

  describe('sizes', () => {
    it('renders sm size', () => {
      render(<Button data-testid="btn" size="sm">Small</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('h-8');
    });

    it('renders lg size', () => {
      render(<Button data-testid="btn" size="lg">Large</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('h-10');
    });

    it('renders icon size', () => {
      render(<Button data-testid="btn" size="icon">X</Button>);
      expect(screen.getByTestId('btn')).toHaveClass('size-9');
    });
  });

  it('merges custom className', () => {
    render(<Button data-testid="btn" className="custom-class">Click me</Button>);
    const btn = screen.getByTestId('btn');
    expect(btn).toHaveClass('custom-class');
    expect(btn).toHaveClass('bg-primary');
  });

  it('forwards ref', () => {
    let buttonRef: HTMLButtonElement | null = null;
    render(
      <Button
        ref={(ref) => {
          buttonRef = ref;
        }}
      >
        Click me
      </Button>
    );
    expect(buttonRef).toBeInstanceOf(HTMLButtonElement);
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('fires onClick handler', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });
});
