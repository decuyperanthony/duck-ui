# Duck UI

A personal React component library with a dark purple theme, glass morphism effects, and a type-safe icon system. Built to be reused across multiple apps with a single `pnpm add`.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)
![Storybook](https://img.shields.io/badge/Storybook-8-ff4785?logo=storybook)
![Vitest](https://img.shields.io/badge/Vitest-97_tests-6e9f18?logo=vitest)

**[Live Storybook](https://duck-ui.vercel.app)**

---

## Quick Start

```bash
pnpm add github:decuyperanthony/duck-ui
```

```typescript
// tailwind.config.ts
import { duckUIPreset } from 'duck-ui/tailwind.preset';

export default {
  content: ['./app/**/*.{ts,tsx}', './node_modules/duck-ui/dist/**/*.js'],
  presets: [duckUIPreset],
};
```

```css
/* globals.css */
@import 'duck-ui/tokens/globals.css';
```

---

## Components

### Card

Simple props-based API with optional badge support.

```tsx
import { Card } from 'duck-ui';

<Card title="Revenue" description="March 2026" badge={{ children: '+8%', variant: 'default' }}>
  <p className="text-2xl font-bold">$12,450</p>
</Card>

<Card title="Users" footer={<span className="text-muted-foreground text-sm">Updated 2min ago</span>}>
  <p className="text-4xl font-bold">1,234</p>
</Card>

// Minimal — just children, no header
<Card>
  <p>Any content here</p>
</Card>
```

### Typography

10 variants with auto HTML tag mapping, weight, color, and alignment control.

```tsx
import { Typography } from 'duck-ui';

<Typography variant="h1">Dashboard</Typography>           // renders <h1>
<Typography variant="body">Some paragraph text</Typography> // renders <p>
<Typography variant="caption" color="muted">Last updated</Typography> // renders <span>

// Override the HTML tag
<Typography variant="h2" as="p">Styled as h2, renders as p</Typography>

// Weight + color + alignment
<Typography variant="body" weight="bold" color="primary" align="center">
  Highlighted centered text
</Typography>
```

### Button

6 variants, 8 sizes, works with icons.

```tsx
import { Button, Icon } from 'duck-ui';

<Button>Default</Button>
<Button variant="destructive" size="sm">Delete</Button>
<Button variant="outline" size="lg">Cancel</Button>
<Button variant="ghost" size="icon"><Icon name="settings" size="sm" /></Button>
```

### Badge

Inline labels with 6 variants.

```tsx
import { Badge } from 'duck-ui';

<Badge>Default</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="outline">v1.2.0</Badge>
```

### Alert

5 semantic variants with icon support.

```tsx
import { Alert, AlertTitle, AlertDescription, Icon } from 'duck-ui';

<Alert variant="success">
  <Icon name="check-circle" size="sm" />
  <AlertTitle>Payment confirmed</AlertTitle>
  <AlertDescription>Your order has been processed.</AlertDescription>
</Alert>

<Alert variant="warning">
  <Icon name="alert-triangle" size="sm" />
  <AlertTitle>Low stock</AlertTitle>
</Alert>
```

### Icon

55+ Lucide icons with full TypeScript autocomplete.

```tsx
import { Icon } from 'duck-ui';

<Icon name="check-circle" size="md" className="text-primary" />
<Icon name="bell" size="lg" strokeWidth={1.5} />
```

### BottomNav

Mobile navigation with liquid glass effect.

```tsx
import { BottomNav } from 'duck-ui';

<BottomNav
  items={[
    { icon: <Icon name="home" />, label: 'Home' },
    { icon: <Icon name="search" />, label: 'Search' },
    { icon: <Icon name="settings" />, label: 'Settings' },
  ]}
  activeIndex={0}
  onSelect={(index) => setActive(index)}
/>
```

### Separator

```tsx
import { Separator } from 'duck-ui';

<Separator />                          // horizontal
<Separator orientation="vertical" />   // vertical
```

---

## Architecture

```
src/
├── ui/                    # Shadcn primitives (internal, never exported)
│   ├── shad-button.tsx
│   ├── shad-card.tsx
│   ├── shad-badge.tsx
│   └── shad-separator.tsx
├── components/            # Public API — what consumers import
│   ├── card/              # Simple props: title, description, badge, footer
│   ├── typography/        # CVA: variant, weight, color, align + auto tag
│   ├── button/            # 6 variants, 8 sizes
│   ├── badge/             # 6 variants
│   ├── alert/             # 5 semantic variants
│   ├── icon/              # 55+ type-safe icons
│   ├── bottom-nav/        # Mobile nav with glass effect
│   └── separator/         # Horizontal/vertical divider
├── tokens/
│   ├── globals.css        # CSS variables + utility classes
│   └── tailwind.preset.ts
└── index.ts               # Exports only components/, never ui/
```

**Key decisions:**
- **`ui/` vs `components/`** — Shadcn primitives live in `ui/` with `Shad` prefix, never exported. Public components in `components/` wrap them with simpler APIs
- **Props over composition** — Card takes `title`, `description`, `badge` as props instead of requiring 6 nested components
- **Type-safe icons** — Registry pattern with auto-generated union type
- **CVA everywhere** — Typography, Alert, Button, Badge all use class-variance-authority for consistent variant management
- **HSL without wrapper** — CSS variables store raw HSL values for flexible use in colors, shadows, and glows

---

## Design Tokens

| Token | Color | Usage |
|-------|-------|-------|
| `--background` | Deep purple | Page background |
| `--primary` | Teal | Interactive elements |
| `--accent` | Light purple | Secondary highlights |
| `--destructive` | Red | Error states |
| `--success` | Green | Success states |
| `--warning` | Orange | Warning states |
| `--info` | Blue | Info states |

### CSS Utilities

- **Gradients** — `.gradient-dark`, `.gradient-card`, `.gradient-header`
- **Glass effects** — `.glass-dark`, `.liquid-glass`
- **Glows** — `.glow-primary`, `.glow-accent`
- **Shadows** — `.shadow-soft`, `.shadow-elevated`
- **Animations** — `.animate-in`, `.animate-slide-up`, `.animate-fade-in`, `.animate-glow`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Components | React 18, TypeScript 5.6 (strict, no `any`, no `as`) |
| Styling | Tailwind CSS 3.4, CVA, tailwind-merge |
| Icons | Lucide React (55+ icons, tree-shakeable) |
| Testing | Vitest 2.1, Testing Library (97 tests) |
| Documentation | Storybook 8 (20+ interactive stories) |
| Build | Vite 5.4 (library mode, ES + CJS + types) |

---

## Development

```bash
pnpm dev              # Storybook on :6006
pnpm test             # Vitest (97 tests)
pnpm test:coverage    # Coverage report
pnpm type-check       # TypeScript check
pnpm lint:fix         # ESLint + auto-fix
pnpm build            # Library build (ES + CJS + types)
pnpm build:storybook  # Static Storybook
```

---

## License

MIT
