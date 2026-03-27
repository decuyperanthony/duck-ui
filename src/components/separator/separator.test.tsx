import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Separator } from './separator';

describe('Separator', () => {
  it('renders without crashing', () => {
    render(<Separator data-testid="sep" />);
    expect(screen.getByTestId('sep')).toBeInTheDocument();
  });

  it('has role="separator"', () => {
    render(<Separator />);
    expect(screen.getByRole('separator')).toBeInTheDocument();
  });

  it('renders horizontal by default', () => {
    render(<Separator />);
    const sep = screen.getByRole('separator');
    expect(sep).toHaveAttribute('aria-orientation', 'horizontal');
    expect(sep).toHaveClass('h-px');
    expect(sep).toHaveClass('w-full');
  });

  it('renders vertical orientation', () => {
    render(<Separator orientation="vertical" />);
    const sep = screen.getByRole('separator');
    expect(sep).toHaveAttribute('aria-orientation', 'vertical');
    expect(sep).toHaveClass('w-px');
    expect(sep).toHaveClass('h-full');
  });

  it('merges custom className', () => {
    render(<Separator data-testid="sep" className="my-4" />);
    const sep = screen.getByTestId('sep');
    expect(sep).toHaveClass('my-4');
    expect(sep).toHaveClass('bg-border');
  });

  it('forwards ref', () => {
    let sepRef: HTMLDivElement | null = null;
    render(
      <Separator
        ref={(ref) => {
          sepRef = ref;
        }}
      />
    );
    expect(sepRef).toBeInstanceOf(HTMLDivElement);
  });
});
