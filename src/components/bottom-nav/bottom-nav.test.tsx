import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { BottomNav, type NavItem } from './bottom-nav';

const mockItems: NavItem[] = [
  { label: 'Home', icon: <span data-testid="icon-home">H</span> },
  { label: 'Settings', icon: <span data-testid="icon-settings">S</span> },
  { label: 'Profile', icon: <span data-testid="icon-profile">P</span> },
];

describe('BottomNav', () => {
  it('renders all items', () => {
    render(<BottomNav items={mockItems} />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Profile')).toBeInTheDocument();
  });

  it('calls onSelect with correct index on click', () => {
    const handleSelect = vi.fn();
    render(<BottomNav items={mockItems} onSelect={handleSelect} />);

    fireEvent.click(screen.getByText('Settings'));

    expect(handleSelect).toHaveBeenCalledWith(1);
  });

  it('marks active item with aria-current', () => {
    render(<BottomNav items={mockItems} activeIndex={2} />);

    const buttons = screen.getAllByRole('button');
    expect(buttons[2]).toHaveAttribute('aria-current', 'page');
  });

  it('forwards ref', () => {
    let navRef: HTMLElement | null = null;
    render(
      <BottomNav
        items={mockItems}
        ref={(ref) => {
          navRef = ref;
        }}
      />
    );
    expect(navRef).toBeInstanceOf(HTMLElement);
  });
});
