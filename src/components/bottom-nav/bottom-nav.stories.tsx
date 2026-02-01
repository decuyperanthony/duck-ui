import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Icon } from '../icon';

import { BottomNav, type NavItem } from './bottom-nav';

const meta: Meta<typeof BottomNav> = {
  title: 'Components/BottomNav',
  component: BottomNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
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
  render: () => (
    <div className="w-[375px]">
      <BottomNav items={defaultItems} activeIndex={0} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const InteractiveNav = () => {
      const [active, setActive] = useState(0);
      return (
        <div className="w-[375px]">
          <BottomNav items={defaultItems} activeIndex={active} onSelect={setActive} />
        </div>
      );
    };
    return <InteractiveNav />;
  },
};

export const ThreeItems: Story = {
  render: () => {
    const items: NavItem[] = [
      { label: 'Home', icon: <Icon name="home" size="sm" /> },
      { label: 'Search', icon: <Icon name="search" size="sm" /> },
      { label: 'Settings', icon: <Icon name="settings" size="sm" /> },
    ];
    return (
      <div className="w-[375px]">
        <BottomNav items={items} activeIndex={1} />
      </div>
    );
  },
};

export const InMobileFrame: Story = {
  parameters: {
    layout: 'fullscreen',
  },
  render: () => {
    const InteractiveNav = () => {
      const [active, setActive] = useState(0);
      return (
        <div className="relative mx-auto h-[667px] w-[375px] overflow-hidden rounded-[40px] border-4 border-foreground/20 bg-background">
          {/* Screen content */}
          <div className="flex h-full flex-col">
            <div className="flex-1 p-4">
              <h1 className="text-lg font-semibold text-foreground">
                {defaultItems[active]?.label}
              </h1>
              <p className="mt-2 text-sm text-muted-foreground">
                Tap the navigation below to switch pages.
              </p>
            </div>

            {/* Fixed bottom nav wrapper */}
            <div className="px-3 pb-4">
              <BottomNav
                items={defaultItems}
                activeIndex={active}
                onSelect={setActive}
              />
            </div>
          </div>
        </div>
      );
    };
    return <InteractiveNav />;
  },
};
