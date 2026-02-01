import { forwardRef } from 'react';

import { cn } from '@/lib/utils';

import { ICONS } from './icon-registry';
import { iconSizes } from './types';

import type { IconProps } from './types';

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, name, size = 'sm', strokeWidth = 2, ...props }, ref) => {
    const IconComponent = ICONS[name];

    return (
      <IconComponent
        ref={ref}
        aria-hidden="true"
        className={cn('shrink-0', className)}
        focusable={false}
        size={iconSizes[size]}
        strokeWidth={strokeWidth}
        {...props}
      />
    );
  }
);

Icon.displayName = 'Icon';
