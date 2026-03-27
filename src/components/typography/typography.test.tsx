import { createRef } from 'react';

import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Typography } from './typography';

describe('Typography', () => {
  it('renders with default tag (p)', () => {
    render(<Typography data-testid="typo">Hello</Typography>);
    expect(screen.getByTestId('typo').tagName).toBe('P');
  });

  it('renders children correctly', () => {
    render(<Typography>Some text content</Typography>);
    expect(screen.getByText('Some text content')).toBeInTheDocument();
  });

  describe('variant to element mapping', () => {
    const variantTagMap: Array<{ variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'small' | 'caption'; tag: string }> = [
      { variant: 'h1', tag: 'H1' },
      { variant: 'h2', tag: 'H2' },
      { variant: 'h3', tag: 'H3' },
      { variant: 'h4', tag: 'H4' },
      { variant: 'h5', tag: 'H5' },
      { variant: 'h6', tag: 'H6' },
      { variant: 'body', tag: 'P' },
      { variant: 'lead', tag: 'P' },
      { variant: 'small', tag: 'SPAN' },
      { variant: 'caption', tag: 'SPAN' },
    ];

    variantTagMap.forEach(({ variant, tag }) => {
      it(`renders ${variant} as <${tag.toLowerCase()}>`, () => {
        render(
          <Typography variant={variant} data-testid="typo">
            Text
          </Typography>
        );
        expect(screen.getByTestId('typo').tagName).toBe(tag);
      });
    });
  });

  it('overrides tag with the as prop', () => {
    render(
      <Typography variant="h1" as="div" data-testid="typo">
        Text
      </Typography>
    );
    expect(screen.getByTestId('typo').tagName).toBe('DIV');
  });

  describe('weight', () => {
    it('applies font-medium for medium weight', () => {
      render(
        <Typography weight="medium" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('font-medium');
    });

    it('applies font-bold for bold weight', () => {
      render(
        <Typography weight="bold" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('font-bold');
    });
  });

  describe('color', () => {
    it('applies text-muted-foreground for muted color', () => {
      render(
        <Typography color="muted" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('text-muted-foreground');
    });

    it('applies text-primary for primary color', () => {
      render(
        <Typography color="primary" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('text-primary');
    });
  });

  describe('align', () => {
    it('applies text-center for center alignment', () => {
      render(
        <Typography align="center" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('text-center');
    });

    it('applies text-right for right alignment', () => {
      render(
        <Typography align="right" data-testid="typo">
          Text
        </Typography>
      );
      expect(screen.getByTestId('typo')).toHaveClass('text-right');
    });
  });

  it('forwards ref to the rendered element', () => {
    const ref = createRef<HTMLElement>();
    render(
      <Typography ref={ref} variant="h2">
        Heading
      </Typography>
    );
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement);
    expect(ref.current?.tagName).toBe('H2');
  });

  it('merges custom className with variant classes', () => {
    render(
      <Typography variant="h1" className="mt-8" data-testid="typo">
        Text
      </Typography>
    );
    const el = screen.getByTestId('typo');
    expect(el).toHaveClass('mt-8');
    expect(el).toHaveClass('tracking-tight');
  });
});
