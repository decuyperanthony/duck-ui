# CLAUDE.md - Duck UI Design System

Project-specific instructions for Claude agents.

## Project Overview

**Purpose:** Personal React component library for reuse across 3 apps
**Status:** Initial setup
**Main Branch:** `main`

## Tech Stack

- **Framework:** React 18+
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4+ with custom preset
- **Build:** Vite (library mode)
- **Testing:** Vitest + Testing Library
- **Docs:** Storybook 8+
- **Icons:** Lucide React

## Project Structure

```
src/
├── tokens/           # CSS variables + Tailwind preset
├── lib/              # Utilities (cn, ObjectUtils)
├── components/       # UI components
│   ├── icon/         # Type-safe icon system
│   ├── card/         # Card component
│   └── alert/        # Alert component
├── stories/          # Documentation stories
└── index.ts          # Main entry
```

## Commands

```bash
pnpm dev          # Start Storybook
pnpm build        # Build library
pnpm test         # Run tests
pnpm test:ui      # Tests with UI
pnpm type-check   # TypeScript check
pnpm lint:fix     # Fix lint issues
```

## Code Conventions

### TypeScript Rules (STRICT)

1. **NEVER use `any`** - Use proper types or `unknown`
2. **NEVER use `as` casting** - Use type guards
3. **NEVER use `!` (non-null assertion)** - Handle nullability
4. **Arrow functions only** - No `function` keyword
5. **Type over interface** - Use `type` declarations

### Component Pattern

```typescript
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'default' | 'primary';
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', ...props }, ref) => (
    <button
      ref={ref}
      className={cn('base-classes', className)}
      {...props}
    />
  )
);
Button.displayName = 'Button';
```

### Import Order

```typescript
// 1. React
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

// 2. External libraries
import { cva } from 'class-variance-authority';

// 3. Internal absolute imports
import { cn } from '@/lib/utils';

// 4. Relative imports
import { iconSizes } from './types';
import type { IconProps } from './types';
```

### Test Pattern

```typescript
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Component } from './component';

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Component data-testid="comp" />);
    expect(screen.getByTestId('comp')).toBeInTheDocument();
  });

  it('forwards ref', () => {
    let ref: HTMLElement | null = null;
    render(<Component ref={(r) => { ref = r; }} />);
    expect(ref).toBeInstanceOf(HTMLElement);
  });
});
```

### Story Pattern

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Component } from './component';

const meta: Meta<typeof Component> = {
  title: 'Components/Component',
  component: Component,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Component>;

export const Default: Story = {
  render: () => <Component />,
};
```

## Icon System

### Adding New Icons

1. Import from `lucide-react` in `icon-registry.ts`
2. Add to `ICON_MAP` with kebab-case key
3. Type is automatically inferred

```typescript
// icon-registry.ts
import { NewIcon } from 'lucide-react';

const ICON_MAP = {
  // ... existing icons
  'new-icon': NewIcon,
} as const;
```

### Usage

```typescript
<Icon name="new-icon" size="md" className="text-primary" />
```

## File Naming

- Components: `kebab-case.tsx`
- Tests: `kebab-case.test.tsx`
- Stories: `kebab-case.stories.tsx`
- Types: `types.ts`
- Index: `index.ts`

## Pre-Commit Checklist

```bash
pnpm lint:fix
pnpm type-check
pnpm test
pnpm build
```

## What NOT to Do

1. **Don't add business logic** - Components are pure presentation
2. **Don't add app-specific icons** - Keep registry generic
3. **Don't use `any` or `as`** - Ever
4. **Don't skip tests** - Every component needs tests
5. **Don't skip stories** - Every component needs stories
6. **Don't over-engineer** - Keep it simple for 3 apps

## Task File

See `TASK.md` for implementation plan and detailed code specifications.
