import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';
import type { VariantProps } from 'class-variance-authority';

import { ShadButton, shadButtonVariants } from '@/ui/shad-button';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentPropsWithoutRef<'button'> & VariantProps<typeof shadButtonVariants>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <ShadButton ref={ref} className={cn(className)} variant={variant} size={size} {...props} />
  )
);
Button.displayName = 'Button';

export type { ButtonProps };
export { shadButtonVariants as buttonVariants };
