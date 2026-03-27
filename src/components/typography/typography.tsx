import { forwardRef, type HTMLAttributes, type ReactNode } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const typographyVariants = cva('text-foreground', {
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

type Tag = 'p' | 'span' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'small' | 'caption';

type TypographyProps = Omit<HTMLAttributes<HTMLElement>, 'color'> &
  VariantProps<typeof typographyVariants> & {
    as?: Tag;
    children?: ReactNode;
  };

const variantTagMap: Record<TypographyVariant, Tag> = {
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
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ as, variant = 'body', weight, color, align, children, className, ...props }, ref) => {
    const Comp = as ?? variantTagMap[variant ?? 'body'];

    return (
      <Comp
        // @ts-expect-error — ref type varies by tag, safe at runtime
        ref={ref}
        className={cn(typographyVariants({ variant, weight, color, align }), className)}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Typography.displayName = 'Typography';

export { Typography, typographyVariants };
export type { TypographyProps, TypographyVariant, Tag as TypographyTag };
