import { type HTMLAttributes, type ReactNode } from 'react';

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

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body' | 'lead' | 'small' | 'caption';

export type TypographyProps = Omit<HTMLAttributes<HTMLElement>, 'color'> &
  VariantProps<typeof typographyVariants> & {
    children?: ReactNode;
  };

export const Typography = ({ variant = 'body', weight, color, align, className, children, ...props }: TypographyProps) => {
  const classes = cn(typographyVariants({ variant, weight, color, align }), className);

  switch (variant) {
    case 'h1': return <h1 className={classes} {...props}>{children}</h1>;
    case 'h2': return <h2 className={classes} {...props}>{children}</h2>;
    case 'h3': return <h3 className={classes} {...props}>{children}</h3>;
    case 'h4': return <h4 className={classes} {...props}>{children}</h4>;
    case 'h5': return <h5 className={classes} {...props}>{children}</h5>;
    case 'h6': return <h6 className={classes} {...props}>{children}</h6>;
    case 'lead': return <p className={classes} {...props}>{children}</p>;
    case 'small': return <span className={classes} {...props}>{children}</span>;
    case 'caption': return <span className={classes} {...props}>{children}</span>;
    default: return <p className={classes} {...props}>{children}</p>;
  }
};

Typography.displayName = 'Typography';
