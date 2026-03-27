import { createElement, forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const typographyVariants = cva('', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold tracking-tight lg:text-5xl',
      h2: 'text-3xl font-bold tracking-tight',
      h3: 'text-2xl font-semibold tracking-tight',
      h4: 'text-xl font-semibold tracking-tight',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
      body: 'text-base',
      lead: 'text-lg',
      small: 'text-sm',
      caption: 'text-xs',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    color: {
      foreground: 'text-foreground',
      muted: 'text-muted-foreground',
      primary: 'text-primary',
      destructive: 'text-destructive',
      inherit: 'text-inherit',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'foreground',
    align: 'left',
  },
});

const variantElementMap = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
  lead: 'p',
  small: 'span',
  caption: 'span',
} as const;

export type TypographyVariant = keyof typeof variantElementMap;

export type TypographyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof typographyVariants> & {
    as?: ElementType;
    children?: ReactNode;
  };

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as, variant = 'body', weight, color, align, className, children, ...props }, ref) => {
    const element = as ?? variantElementMap[variant ?? 'body'];

    return createElement(
      element,
      {
        ref,
        className: cn(typographyVariants({ variant, weight, color, align }), className),
        ...props,
      },
      children
    );
  }
);

Typography.displayName = 'Typography';
