import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';

import { ShadSeparator } from '@/ui/shad-separator';
import { cn } from '@/lib/utils';

type SeparatorProps = ComponentPropsWithoutRef<'div'> & {
  orientation?: 'horizontal' | 'vertical';
};

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, orientation = 'horizontal', ...props }, ref) => (
    <ShadSeparator ref={ref} className={cn(className)} orientation={orientation} {...props} />
  )
);
Separator.displayName = 'Separator';

export type { SeparatorProps };
