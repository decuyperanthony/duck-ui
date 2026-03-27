import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { ShadBadge, shadBadgeVariants } from '@/ui/shad-badge';

type BadgeProps = ComponentPropsWithoutRef<'span'> & VariantProps<typeof shadBadgeVariants>;

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, ...props }, ref) => (
    <ShadBadge ref={ref} className={className} variant={variant} {...props} />
  )
);
Badge.displayName = 'Badge';

export type { BadgeProps };
export { shadBadgeVariants as badgeVariants };
