import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Icon } from '../icon';

import { BottomNav, type NavItem } from './bottom-nav';

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div className="gradient-dark relative h-[500px] w-[375px]">
        {/* Override fixed positioning for Storybook display */}
        <style>{`
          .storybook-bottom-nav {
            position: absolute !important;
            display: flex !important;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

const defaultItems: NavItem[] = [
  { label: 'Semaines', icon: <Icon name="calendar" size="sm" /> },
  { label: 'Activites', icon: <Icon name="star" size="sm" /> },
  { label: 'Passation', icon: <Icon name="refresh-cw" size="sm" /> },
  { label: 'Arrivee', icon: <Icon name="clock" size="sm" /> },
  { label: 'Plannings', icon: <Icon name="file" size="sm" /> },
];

export const Default: Story = {
  render: () => <BottomNav items={defaultItems} activeIndex={0} className="storybook-bottom-nav" />,
};

export const Interactive: Story = {
  render: () => {
    const InteractiveNav = () => {
      const [active, setActive] = useState(0);
      return <BottomNav items={defaultItems} activeIndex={active} onSelect={setActive} className="storybook-bottom-nav" />;
    };
    return <InteractiveNav />;
  },
};

export const CustomItems: Story = {
  render: () => {
    const items: NavItem[] = [
      { label: 'Home', icon: <Icon name="home" size="sm" /> },
      { label: 'Search', icon: <Icon name="search" size="sm" /> },
      { label: 'Settings', icon: <Icon name="settings" size="sm" /> },
    ];
    return <BottomNav items={items} activeIndex={1} className="storybook-bottom-nav" />;
  },
};
