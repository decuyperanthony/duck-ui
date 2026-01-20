import type { ComponentPropsWithoutRef } from 'react';

import type { IconName } from './icon-registry';

export const iconSizes = {
  xs: 12,
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
} as const;

export type IconSize = keyof typeof iconSizes;

export type IconProps = Omit<ComponentPropsWithoutRef<'svg'>, 'ref'> & {
  /** Icon name from the registry */
  name: IconName;
  /** Size preset */
  size?: IconSize;
  /** Stroke width (1-3) */
  strokeWidth?: number;
};
