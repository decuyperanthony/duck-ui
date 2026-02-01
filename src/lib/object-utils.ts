/**
 * Type-safe Object.keys that returns typed array
 */
export const keys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

/**
 * Type-safe Object.entries
 */
export const entries = <T extends object>(obj: T): [keyof T, T[keyof T]][] => {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
};

export const ObjectUtils = {
  keys,
  entries,
};
