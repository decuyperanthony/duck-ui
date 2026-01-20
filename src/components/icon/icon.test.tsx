import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Icon } from './icon';
import { iconNames, ICONS } from './icon-registry';
import { iconSizes } from './types';

import type { IconSize } from './types';

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon name="check" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders as an SVG element', () => {
    render(<Icon name="check" data-testid="icon" />);
    expect(screen.getByTestId('icon').tagName).toBe('svg');
  });

  it('applies aria-hidden attribute for accessibility', () => {
    render(<Icon name="check" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveAttribute('aria-hidden', 'true');
  });

  it('is not focusable', () => {
    render(<Icon name="check" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveAttribute('focusable', 'false');
  });

  it('applies shrink-0 class by default', () => {
    render(<Icon name="check" data-testid="icon" />);
    expect(screen.getByTestId('icon')).toHaveClass('shrink-0');
  });

  it('merges custom className with default classes', () => {
    render(<Icon name="check" data-testid="icon" className="text-primary" />);
    const icon = screen.getByTestId('icon');
    expect(icon).toHaveClass('shrink-0');
    expect(icon).toHaveClass('text-primary');
  });

  describe('sizes', () => {
    const sizes: IconSize[] = ['xs', 'sm', 'md', 'lg', 'xl'];

    sizes.forEach((size) => {
      it(`renders ${size} size with correct dimensions`, () => {
        render(<Icon name="check" size={size} data-testid="icon" />);
        const icon = screen.getByTestId('icon');
        expect(icon).toHaveAttribute('width', String(iconSizes[size]));
        expect(icon).toHaveAttribute('height', String(iconSizes[size]));
      });
    });

    it('defaults to sm size', () => {
      render(<Icon name="check" data-testid="icon" />);
      const icon = screen.getByTestId('icon');
      expect(icon).toHaveAttribute('width', String(iconSizes.sm));
      expect(icon).toHaveAttribute('height', String(iconSizes.sm));
    });
  });

  describe('strokeWidth', () => {
    it('defaults to strokeWidth 2', () => {
      render(<Icon name="check" data-testid="icon" />);
      expect(screen.getByTestId('icon')).toHaveAttribute('stroke-width', '2');
    });

    it('accepts custom strokeWidth', () => {
      render(<Icon name="check" strokeWidth={1.5} data-testid="icon" />);
      expect(screen.getByTestId('icon')).toHaveAttribute('stroke-width', '1.5');
    });
  });

  describe('icon registry', () => {
    it('renders all registered icons without error', () => {
      iconNames.forEach((name) => {
        const { unmount } = render(<Icon name={name} data-testid={`icon-${name}`} />);
        expect(screen.getByTestId(`icon-${name}`)).toBeInTheDocument();
        unmount();
      });
    });

    it('has matching registry keys and icon components', () => {
      iconNames.forEach((name) => {
        expect(ICONS[name]).toBeDefined();
      });
    });
  });

  describe('ref forwarding', () => {
    it('forwards ref to SVG element', () => {
      let svgRef: SVGSVGElement | null = null;
      render(
        <Icon
          name="check"
          ref={(ref) => {
            svgRef = ref;
          }}
        />
      );
      expect(svgRef).toBeInstanceOf(SVGSVGElement);
    });
  });
});
