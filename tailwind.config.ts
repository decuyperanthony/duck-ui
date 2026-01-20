import type { Config } from 'tailwindcss';

import { duckUIPreset } from './src/tokens/tailwind.preset';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}', './.storybook/**/*.{ts,tsx}'],
  presets: [duckUIPreset],
};

export default config;
