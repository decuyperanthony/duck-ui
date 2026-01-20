import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Tokens/Overview',
};

export default meta;
type Story = StoryObj;

const ColorSwatch = ({ name, variable }: { name: string; variable: string }) => (
  <div className="flex flex-col gap-2">
    <div
      className="h-16 w-full rounded-lg border border-white/10"
      style={{ backgroundColor: `hsl(var(${variable}))` }}
    />
    <div className="space-y-0.5">
      <p className="text-sm font-medium text-white">{name}</p>
      <p className="font-mono text-xs text-muted-foreground">{variable}</p>
    </div>
  </div>
);

export const Colors: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Core Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Background" variable="--background" />
          <ColorSwatch name="Foreground" variable="--foreground" />
          <ColorSwatch name="Card" variable="--card" />
          <ColorSwatch name="Border" variable="--border" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Brand Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Primary" variable="--primary" />
          <ColorSwatch name="Secondary" variable="--secondary" />
          <ColorSwatch name="Accent" variable="--accent" />
          <ColorSwatch name="Muted" variable="--muted" />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Semantic Colors</h2>
        <div className="grid grid-cols-4 gap-4">
          <ColorSwatch name="Destructive" variable="--destructive" />
          <ColorSwatch name="Success" variable="--success" />
          <ColorSwatch name="Warning" variable="--warning" />
          <ColorSwatch name="Info" variable="--info" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Typography: Story = {
  render: () => (
    <div className="space-y-6">
      <h2 className="mb-4 text-lg font-semibold text-white">Typography Scale</h2>
      <div className="space-y-4">
        <div className="text-xs text-white">text-xs (12px)</div>
        <div className="text-sm text-white">text-sm (14px)</div>
        <div className="text-base text-white">text-base (16px)</div>
        <div className="text-lg text-white">text-lg (18px)</div>
        <div className="text-xl text-white">text-xl (20px)</div>
        <div className="text-2xl text-white">text-2xl (24px)</div>
        <div className="text-3xl text-white">text-3xl (30px)</div>
        <div className="text-4xl text-white">text-4xl (36px)</div>
      </div>

      <h2 className="mb-4 mt-8 text-lg font-semibold text-white">Font Weights</h2>
      <div className="space-y-2 text-lg">
        <div className="font-normal text-white">font-normal (400)</div>
        <div className="font-medium text-white">font-medium (500)</div>
        <div className="font-semibold text-white">font-semibold (600)</div>
        <div className="font-bold text-white">font-bold (700)</div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

export const Effects: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Shadows</h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-xl bg-card shadow-soft" />
            <span className="text-xs text-muted-foreground">shadow-soft</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-xl bg-card shadow-elevated" />
            <span className="text-xs text-muted-foreground">shadow-elevated</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Glows</h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-xl bg-card glow-primary" />
            <span className="text-xs text-muted-foreground">glow-primary</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-xl bg-card glow-accent" />
            <span className="text-xs text-muted-foreground">glow-accent</span>
          </div>
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-white">Glass Effect</h2>
        <div className="flex gap-6">
          <div className="flex flex-col items-center gap-2">
            <div className="h-24 w-24 rounded-xl glass-dark" />
            <span className="text-xs text-muted-foreground">glass-dark</span>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};
