import { forwardRef } from 'react';

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type NavItem = {
  label: string;
  icon: ReactNode;
};

type BottomNavProps = Omit<ComponentPropsWithoutRef<'nav'>, 'children' | 'onSelect'> & {
  items: NavItem[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
};

export const BottomNav = forwardRef<HTMLElement, BottomNavProps>(
  ({ className, items, activeIndex = 0, onSelect, ...props }, ref) => (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-4 md:hidden">
      <nav
        ref={ref}
        className={cn('liquid-glass flex items-center justify-around rounded-2xl px-2 py-2', className)}
        aria-label="Navigation principale"
        {...props}
      >
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={item.label}
              type="button"
              onClick={() => onSelect?.(index)}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'relative flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 transition-all duration-300',
                isActive ? 'text-primary' : 'text-white/50 hover:text-white/80'
              )}
            >
              {isActive && <span className="absolute inset-0 rounded-xl bg-white/10" aria-hidden="true" />}
              <span
                className={cn(
                  'relative z-10 transition-all duration-300',
                  isActive && 'scale-110 drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]'
                )}
              >
                {item.icon}
              </span>
              <span
                className={cn(
                  'relative z-10 text-[10px] font-medium transition-all duration-300',
                  isActive && 'font-semibold'
                )}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  )
);
BottomNav.displayName = 'BottomNav';
