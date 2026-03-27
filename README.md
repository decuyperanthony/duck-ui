# Duck UI

A personal React component library with a dark purple theme, glass morphism effects, and a type-safe icon system. Built to be reused across multiple apps with a single `pnpm add`.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss)
![Storybook](https://img.shields.io/badge/Storybook-8-ff4785?logo=storybook)
![Vitest](https://img.shields.io/badge/Vitest-2.1-6e9f18?logo=vitest)

**[Live Storybook](https://duck-ui.vercel.app)**

---

## What's Inside

### Components

| Component | Description |
|-----------|-------------|
| **Icon** | 55+ Lucide icons with full TypeScript autocomplete, 5 size presets, configurable stroke width |
| **Card** | Composition-based card system (Header, Title, Description, Content, Footer) with gradient + glass morphism |
| **Alert** | 5 semantic variants (default, destructive, success, warning, info) using CVA |
| **BottomNav** | Mobile navigation with liquid glass effect, active state glow, and `aria-current` support |

### Design Tokens

A complete token system using CSS custom properties (HSL without wrapper for maximum flexibility):

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

Built-in utility classes for consistent visual effects:

- **Gradients** — `.gradient-dark`, `.gradient-card`, `.gradient-header`
- **Glass effects** — `.glass-dark`, `.liquid-glass` (iOS-inspired blur + saturation)
- **Glows** — `.glow-primary`, `.glow-accent`
- **Shadows** — `.shadow-soft`, `.shadow-elevated`
- **Animations** — `.animate-in`, `.animate-slide-up`, `.animate-fade-in`, `.animate-glow`

---

## Architecture

```
src/
├── components/          # Each component: .tsx + .test.tsx + .stories.tsx
│   ├── icon/            # Type-safe registry pattern (55+ icons)
│   ├── card/            # Composition pattern (6 composable parts)
│   ├── alert/           # CVA variant pattern (5 variants)
│   └── bottom-nav/      # Interactive pattern (active state + aria)
├── tokens/
│   ├── globals.css      # 370 lines of CSS variables + utilities
│   └── tailwind.preset.ts
├── lib/
│   ├── utils.ts         # cn() — clsx + tailwind-merge
│   └── object-utils.ts  # Type-safe Object.keys/entries
└── index.ts             # Barrel exports
```

**Key decisions:**
- **Composition over configuration** — Card ships 6 composable parts instead of a single component with variant props
- **Type-safe icon registry** — `ICON_MAP` as const object, union type auto-generated via `ObjectUtils.keys()`
- **HSL without wrapper** — CSS variables store raw HSL values (`270 89% 8%`), enabling flexible use in colors, shadows, and glows
- **CVA for variants** — Alert uses class-variance-authority, exported for consumer customization
- **Vite library mode** — 3 entry points (components, tokens, preset), ES + CJS output, auto-generated `.d.ts`

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Components | React 18, TypeScript 5.6 (strict, no `any`, no `as`) |
| Styling | Tailwind CSS 3.4, CVA, tailwind-merge |
| Icons | Lucide React (55+ icons, tree-shakeable) |
| Testing | Vitest 2.1, Testing Library, v8 coverage |
| Documentation | Storybook 8 (20+ interactive stories) |
| Build | Vite 5.4 (library mode, ES + CJS + types) |
| Code quality | ESLint (strict TS rules), Prettier (Tailwind plugin) |

---

## Installation

```bash
pnpm add github:decuyperanthony/duck-ui
```

### Setup

**1. Tailwind preset**

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss';
import { duckUIPreset } from 'duck-ui/tailwind.preset';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './node_modules/duck-ui/dist/**/*.js',
  ],
  presets: [duckUIPreset],
};

export default config;
```

**2. CSS tokens**

```css
/* globals.css */
@import 'duck-ui/tokens/globals.css';
```

**3. Use components**

```tsx
import { Icon, Card, CardHeader, CardTitle, CardContent, Alert, AlertTitle } from 'duck-ui';

<Card>
  <CardHeader>
    <CardTitle>Dashboard</CardTitle>
  </CardHeader>
  <CardContent>
    <Alert variant="success">
      <Icon name="check-circle" size="sm" />
      <AlertTitle>Saved</AlertTitle>
    </Alert>
  </CardContent>
</Card>
```

---

## Development

```bash
pnpm dev              # Storybook on :6006
pnpm test             # Vitest
pnpm test:coverage    # Coverage report
pnpm type-check       # TypeScript check
pnpm lint:fix         # ESLint + auto-fix
pnpm build            # Library build (ES + CJS + types)
pnpm build:storybook  # Static Storybook
```

---

## License

MIT
