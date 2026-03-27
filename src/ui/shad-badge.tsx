import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cva } from 'class-variance-authority';

import { cn } from '@/lib/utils';

export const shadBadgeVariants = cva(
  'inline-flex items-center justify-center rounded-full border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-white',
        outline: 'border-border text-foreground',
        ghost: '',
        link: 'text-primary underline-offset-4',
      },
    },
    defaultVariants: { variant: 'default' },
  }
);

export type ShadBadgeProps = ComponentPropsWithoutRef<'span'> &
  VariantProps<typeof shadBadgeVariants>;

export const ShadBadge = forwardRef<HTMLSpanElement, ShadBadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <span ref={ref} className={cn(shadBadgeVariants({ variant, className }))} {...props} />
  )
);
ShadBadge.displayName = 'ShadBadge';
