import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import {
  ShadCard,
  ShadCardContent,
  ShadCardDescription,
  ShadCardFooter,
  ShadCardHeader,
  ShadCardTitle,
} from '@/ui/shad-card';
import { ShadBadge } from '@/ui/shad-badge';

import type { ShadBadgeProps } from '@/ui/shad-badge';

export type CardBadgeProps = ShadBadgeProps;

export type CardProps = ComponentPropsWithoutRef<'div'> & {
  title?: string;
  description?: string;
  badge?: ShadBadgeProps;
  footer?: ReactNode;
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, description, badge, footer, children, className, ...props }, ref) => (
    <ShadCard ref={ref} className={className} {...props}>
      {(title || description || badge) && (
        <ShadCardHeader>
          <div className="flex items-center justify-between gap-2">
            {title && <ShadCardTitle>{title}</ShadCardTitle>}
            {badge && <ShadBadge {...badge} />}
          </div>
          {description && <ShadCardDescription>{description}</ShadCardDescription>}
        </ShadCardHeader>
      )}
      <ShadCardContent>{children}</ShadCardContent>
      {footer && <ShadCardFooter>{footer}</ShadCardFooter>}
    </ShadCard>
  )
);
Card.displayName = 'Card';
