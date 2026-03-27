import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

export type ShadSeparatorProps = ComponentPropsWithoutRef<'div'> & {
  orientation?: 'horizontal' | 'vertical';
};

export const ShadSeparator = forwardRef<HTMLDivElement, ShadSeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <div
      ref={ref}
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'bg-border shrink-0',
        orientation === 'horizontal' ? 'h-px w-full' : 'h-full w-px',
        className
      )}
      {...props}
    />
  )
);
ShadSeparator.displayName = 'ShadSeparator';
