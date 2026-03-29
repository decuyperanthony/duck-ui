import { useState, type ReactNode } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Overview',
};

export default meta;
type Story = StoryObj;

/* ─── Helpers ─── */

const ColorSwatch = ({
  name,
  variable,
  foreground,
}: {
  name: string;
  variable: string;
  foreground?: string;
}) => {
  const cssVar = `var(${variable})`;
  const bgValue = `hsl(${cssVar})`;
  const fgValue = foreground ? `hsl(var(${foreground}))` : undefined;

  return (
    <div className="flex flex-col gap-2">
      <div
        className="relative h-16 w-full rounded-lg border border-white/10 overflow-hidden"
        style={{ backgroundColor: bgValue }}
      >
        {fgValue && (
          <span
            className="absolute bottom-1 left-2 text-[10px] font-medium"
            style={{ color: fgValue }}
          >
            Aa
          </span>
        )}
      </div>
      <div className="space-y-0.5">
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="font-mono text-xs text-muted-foreground">{variable}</p>
      </div>
    </div>
  );
};

const CodeBlock = ({ children }: { children: ReactNode }) => {
  const [copied, setCopied] = useState(false);
  const text = typeof children === 'string' ? children : '';

  const handleCopy = () => {
    void navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => { setCopied(false); }, 1500);
  };

  return (
    <div className="relative group">
      <pre className="rounded-lg bg-muted/50 border border-border p-4 text-xs font-mono text-foreground overflow-x-auto">
        {children}
      </pre>
      <button
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity text-xs text-muted-foreground hover:text-foreground bg-background/80 rounded px-2 py-1 border border-border"
        onClick={handleCopy}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: ReactNode }) => (
  <div>
    <h2 className="mb-4 text-lg font-semibold text-foreground">{title}</h2>
    {children}
  </div>
);

/* ─── Colors ─── */

export const Colors: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      <Section title="Core Colors">
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Background" variable="--duck-background" foreground="--duck-foreground" />
          <ColorSwatch name="Foreground" variable="--duck-foreground" />
          <ColorSwatch name="Card" variable="--duck-card" foreground="--duck-card-foreground" />
          <ColorSwatch name="Border" variable="--duck-border" />
        </div>
      </Section>

      <Section title="Brand Colors">
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Primary" variable="--duck-primary" foreground="--duck-primary-foreground" />
          <ColorSwatch name="Secondary" variable="--duck-secondary" foreground="--duck-secondary-foreground" />
          <ColorSwatch name="Accent" variable="--duck-accent" foreground="--duck-accent-foreground" />
          <ColorSwatch name="Muted" variable="--duck-muted" foreground="--duck-muted-foreground" />
        </div>
      </Section>

      <Section title="Semantic Colors">
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Destructive" variable="--duck-destructive" foreground="--duck-destructive-foreground" />
          <ColorSwatch name="Success" variable="--duck-success" foreground="--duck-success-foreground" />
          <ColorSwatch name="Warning" variable="--duck-warning" foreground="--duck-warning-foreground" />
          <ColorSwatch name="Info" variable="--duck-info" foreground="--duck-info-foreground" />
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`/* Tailwind classes */
<div className="bg-primary text-primary-foreground" />
<div className="bg-destructive text-destructive-foreground" />
<div className="text-muted-foreground" />

/* CSS variables (raw) */
background-color: hsl(var(--duck-primary));
color: hsl(var(--duck-primary-foreground));`}</CodeBlock>
      </Section>
    </div>
  ),
  parameters: { layout: 'padded' },
};

/* ─── Radius ─── */

const radiusTokens = [
  { name: 'sm', variable: 'calc(var(--duck-radius) - 4px)', tailwind: 'rounded-sm', value: '0.25rem' },
  { name: 'md', variable: 'calc(var(--duck-radius) - 2px)', tailwind: 'rounded-md', value: '0.5rem' },
  { name: 'lg', variable: 'var(--duck-radius)', tailwind: 'rounded-lg', value: '0.75rem' },
  { name: 'full', variable: '9999px', tailwind: 'rounded-full', value: '9999px' },
];

export const Radius: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      <Section title="Border Radius">
        <div className="flex items-end gap-6">
          {radiusTokens.map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className="h-20 w-20 bg-primary"
                style={{ borderRadius: r.variable }}
              />
              <span className="text-sm font-medium text-foreground">{r.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{r.tailwind}</span>
              <span className="font-mono text-[10px] text-muted-foreground/60">{r.value}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`<div className="rounded-sm" />  /* 0.25rem */
<div className="rounded-md" />  /* 0.5rem  */
<div className="rounded-lg" />  /* 0.75rem */
<div className="rounded-full" /> /* pill    */

/* CSS variable */
border-radius: var(--duck-radius);`}</CodeBlock>
      </Section>
    </div>
  ),
  parameters: { layout: 'padded' },
};

/* ─── Typography ─── */

const typographyScale = [
  { name: 'text-xs', size: '12px', lineHeight: '16px' },
  { name: 'text-sm', size: '14px', lineHeight: '20px' },
  { name: 'text-base', size: '16px', lineHeight: '24px' },
  { name: 'text-lg', size: '18px', lineHeight: '28px' },
  { name: 'text-xl', size: '20px', lineHeight: '28px' },
  { name: 'text-2xl', size: '24px', lineHeight: '32px' },
  { name: 'text-3xl', size: '30px', lineHeight: '36px' },
  { name: 'text-4xl', size: '36px', lineHeight: '40px' },
];

const fontWeights = [
  { name: 'font-normal', weight: '400' },
  { name: 'font-medium', weight: '500' },
  { name: 'font-semibold', weight: '600' },
  { name: 'font-bold', weight: '700' },
];

export const Typography: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      <Section title="Type Scale">
        <div className="space-y-3">
          {typographyScale.map((t) => (
            <div key={t.name} className="flex items-baseline gap-4">
              <span className="w-24 shrink-0 font-mono text-xs text-muted-foreground">{t.name}</span>
              <span className={`${t.name} text-foreground`}>
                The quick brown fox
              </span>
              <span className="font-mono text-[10px] text-muted-foreground/60">
                {t.size}/{t.lineHeight}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Font Weights">
        <div className="space-y-2 text-lg">
          {fontWeights.map((w) => (
            <div key={w.name} className="flex items-baseline gap-4">
              <span className="w-32 shrink-0 font-mono text-xs text-muted-foreground">{w.name}</span>
              <span className={`${w.name} text-foreground`}>Inter {w.weight}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`/* With Tailwind */
<p className="text-sm font-medium text-foreground">Body text</p>
<h1 className="text-4xl font-bold text-foreground">Heading</h1>
<span className="text-xs text-muted-foreground">Caption</span>

/* With Typography component */
import { Typography } from '@duck-ui/react';

<Typography variant="h1">Heading</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption" color="muted">Caption</Typography>`}</CodeBlock>
      </Section>
    </div>
  ),
  parameters: { layout: 'padded' },
};

/* ─── Effects ─── */

export const Effects: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      <Section title="Shadows">
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-24 rounded-xl bg-card shadow-soft" />
            <span className="text-xs text-muted-foreground">shadow-soft</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-24 rounded-xl bg-card shadow-elevated" />
            <span className="text-xs text-muted-foreground">shadow-elevated</span>
          </div>
        </div>
      </Section>

      <Section title="Glows">
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-24 rounded-xl bg-card glow-primary" />
            <span className="text-xs text-muted-foreground">glow-primary</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-24 rounded-xl bg-card glow-accent" />
            <span className="text-xs text-muted-foreground">glow-accent</span>
          </div>
        </div>
      </Section>

      <Section title="Glass Effects">
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-32 rounded-xl glass-dark" />
            <span className="text-xs text-muted-foreground">glass-dark</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-24 w-32 rounded-xl liquid-glass" />
            <span className="text-xs text-muted-foreground">liquid-glass</span>
          </div>
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`/* Shadows */
<div className="shadow-soft" />
<div className="shadow-elevated" />

/* Glows */
<div className="glow-primary" />
<div className="glow-accent" />

/* Glass */
<div className="glass-dark" />
<div className="liquid-glass" />`}</CodeBlock>
      </Section>
    </div>
  ),
  parameters: { layout: 'padded' },
};

/* ─── Animations ─── */

export const Animations: Story = {
  render: () => (
    <div className="w-full max-w-3xl space-y-10">
      <Section title="Animation Tokens">
        <div className="grid grid-cols-3 gap-6">
          {[
            { name: 'duration-fast', value: '0.2s', variable: '--duck-animation-duration-fast' },
            { name: 'duration-normal', value: '0.3s', variable: '--duck-animation-duration-normal' },
            { name: 'duration-slow', value: '2s', variable: '--duck-animation-duration-slow' },
          ].map((t) => (
            <div key={t.name} className="flex flex-col gap-1">
              <span className="text-sm font-medium text-foreground">{t.name}</span>
              <span className="font-mono text-xs text-muted-foreground">{t.value}</span>
              <span className="font-mono text-[10px] text-muted-foreground/60">{t.variable}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Built-in Animations">
        <div className="flex gap-8">
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-lg bg-primary animate-glow" />
            <span className="text-xs text-muted-foreground">animate-glow</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-lg bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">animate-pulse</span>
          </div>
        </div>
      </Section>

      <Section title="Usage">
        <CodeBlock>{`/* Utility classes */
<div className="animate-in" />
<div className="animate-slide-up" />
<div className="animate-fade-in" />
<div className="animate-glow" />

/* CSS variables for custom animations */
transition-duration: var(--duck-animation-duration-fast);
animation-timing-function: var(--duck-animation-easing);`}</CodeBlock>
      </Section>
    </div>
  ),
  parameters: { layout: 'padded' },
};
