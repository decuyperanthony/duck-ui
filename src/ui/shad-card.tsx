import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef } from 'react';

import { cn } from '@/lib/utils';

// ShadCard
type ShadCardProps = ComponentPropsWithoutRef<'div'>;

export const ShadCard = forwardRef<HTMLDivElement, ShadCardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-2xl border border-white/10 text-card-foreground shadow-soft gradient-card',
        'transition-all duration-300 hover:border-white/20 hover:shadow-elevated',
        className
      )}
      {...props}
    />
  )
);
ShadCard.displayName = 'ShadCard';

// ShadCardHeader
type ShadCardHeaderProps = ComponentPropsWithoutRef<'div'>;

export const ShadCardHeader = forwardRef<HTMLDivElement, ShadCardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 p-5 pb-0', className)} {...props} />
  )
);
ShadCardHeader.displayName = 'ShadCardHeader';

// ShadCardTitle
type ShadCardTitleProps = ComponentPropsWithoutRef<'h3'>;

export const ShadCardTitle = forwardRef<HTMLHeadingElement, ShadCardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight text-white', className)}
      {...props}
    />
  )
);
ShadCardTitle.displayName = 'ShadCardTitle';

// ShadCardDescription
type ShadCardDescriptionProps = ComponentPropsWithoutRef<'p'>;

export const ShadCardDescription = forwardRef<HTMLParagraphElement, ShadCardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
);
ShadCardDescription.displayName = 'ShadCardDescription';

// ShadCardContent
type ShadCardContentProps = ComponentPropsWithoutRef<'div'>;

export const ShadCardContent = forwardRef<HTMLDivElement, ShadCardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-5', className)} {...props} />
  )
);
ShadCardContent.displayName = 'ShadCardContent';

// ShadCardFooter
type ShadCardFooterProps = ComponentPropsWithoutRef<'div'>;

export const ShadCardFooter = forwardRef<HTMLDivElement, ShadCardFooterProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center p-5 pt-0', className)} {...props} />
  )
);
ShadCardFooter.displayName = 'ShadCardFooter';
