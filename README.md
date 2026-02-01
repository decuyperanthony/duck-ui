# Duck UI

A minimal, personal React component library with dark purple theme, glass morphism effects, and type-safe icons.

## Features

- Dark purple theme with teal accents
- Glass morphism and gradient effects
- Type-safe icon system (55+ Lucide icons)
- Tailwind CSS preset for consistent theming
- Storybook for documentation
- Full test coverage with Vitest

## Installation

```bash
# Install via git
pnpm add duck-ui@git+https://github.com/YOUR_USERNAME/duck-ui.git
```

## Setup

### 1. Configure Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { duckUIPreset } from 'duck-ui/tailwind.preset';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/duck-ui/dist/**/*.js',
  ],
  presets: [duckUIPreset],
};

export default config;
```

### 2. Import CSS

```css
/* globals.css */
@import 'duck-ui/tokens/globals.css';

/* Optional: Override tokens */
:root {
  --primary: 200 80% 50%; /* Custom primary color */
}
```

## Components

### Icon

Type-safe icon component with 55+ Lucide icons.

```tsx
import { Icon } from 'duck-ui';

<Icon name="check" size="md" className="text-primary" />
<Icon name="alert-circle" size="lg" strokeWidth={1.5} />
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `IconName` | required | Icon name (autocomplete supported) |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'sm'` | Size preset (12-48px) |
| `strokeWidth` | `number` | `2` | Stroke width (1-3) |
| `className` | `string` | - | Additional CSS classes |

**Available icons:** `check`, `check-circle`, `x`, `x-circle`, `info`, `alert-circle`, `alert-triangle`, `help-circle`, `arrow-up`, `arrow-down`, `arrow-left`, `arrow-right`, `chevron-up`, `chevron-down`, `chevron-left`, `chevron-right`, `plus`, `minus`, `search`, `settings`, `user`, `users`, `home`, `menu`, `bell`, `calendar`, `clock`, `mail`, `phone`, `star`, `heart`, `eye`, `lock`, `trash`, `edit`, `copy`, `download`, `upload`, `share`, `link`, `external-link`, `filter`, `folder`, `file`, `image`, `loader`, `moon`, `sun`, `more-horizontal`, `more-vertical`, `log-out`, `refresh-cw`, `archive`, `map-pin`, `message-circle`, `calendar-check`

### Card

Gradient card with glass morphism and hover effects.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'duck-ui';

<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
    <CardDescription>Welcome back!</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Your content here</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

### Alert

Semantic alert with 5 variants.

```tsx
import { Alert, AlertTitle, AlertDescription, Icon } from 'duck-ui';

<Alert variant="success">
  <Icon name="check-circle" size="sm" />
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>
```

**Variants:** `default` | `destructive` | `success` | `warning` | `info`

## Design Tokens

All colors use CSS variables (HSL format without wrapper):

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `270 89% 8%` | Deep purple background |
| `--foreground` | `0 0% 98%` | Light text |
| `--primary` | `172 66% 50%` | Teal accent |
| `--accent` | `280 60% 60%` | Light purple |
| `--destructive` | `0 72% 51%` | Red |
| `--success` | `142 76% 36%` | Green |
| `--warning` | `38 92% 50%` | Orange |
| `--info` | `199 89% 48%` | Blue |
| `--card` | `270 60% 12%` | Card background |
| `--border` | `270 30% 20%` | Border color |
| `--muted` | `270 30% 15%` | Muted elements |

## CSS Utilities

Utility classes included in `globals.css`:

| Class | Effect |
|-------|--------|
| `.gradient-card` | Card gradient background |
| `.gradient-dark` | Full page gradient |
| `.gradient-header` | Horizontal header gradient |
| `.glass-dark` | Glass morphism effect |
| `.glow-primary` | Primary color glow |
| `.glow-accent` | Accent color glow |
| `.shadow-soft` | Soft shadow |
| `.shadow-elevated` | Elevated shadow |
| `.animate-in` | Fade in + slide up |
| `.animate-slide-up` | Slide up animation |
| `.animate-fade-in` | Fade in animation |
| `.animate-glow` | Pulsing glow |

## Development

```bash
# Install dependencies
pnpm install

# Start Storybook (dev mode)
pnpm dev

# Run tests
pnpm test

# Run tests with UI
pnpm test:ui

# Type check
pnpm type-check

# Lint
pnpm lint:fix

# Build library
pnpm build

# Build Storybook
pnpm build:storybook
```

## Project Structure

```
src/
├── components/
│   ├── icon/           # Type-safe icon system
│   ├── card/           # Card components
│   └── alert/          # Alert components
├── tokens/
│   ├── globals.css     # CSS variables & utilities
│   └── tailwind.preset.ts
├── lib/
│   ├── utils.ts        # cn() helper
│   └── object-utils.ts # ObjectUtils.keys()
├── stories/
│   └── tokens.stories.tsx
└── index.ts
```

## Adding New Icons

1. Import from `lucide-react` in `src/components/icon/icon-registry.ts`
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

## Exports

```typescript
// Components
import {
  Icon,
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Alert, AlertTitle, AlertDescription
} from 'duck-ui';

// Types
import type { IconName, IconSize, IconProps } from 'duck-ui';

// Utilities
import { cn, ObjectUtils } from 'duck-ui';

// Tailwind preset
import { duckUIPreset } from 'duck-ui/tailwind.preset';
```

## License

MIT
