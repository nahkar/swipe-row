import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SwipeRow } from './SwipeRow';

describe('SwipeRow Component', () => {
  it('renders children correctly', () => {
    render(<SwipeRow actions={[]}>Swipe Content</SwipeRow>);
    expect(screen.getByText('Swipe Content')).toBeInTheDocument();
  });

  it('renders correctly with one custom action', () => {
    const handleAction = vi.fn();
    render(
      <SwipeRow 
        actions={[
          { label: 'Custom', onClick: handleAction }
        ]}
      >
        Swipe Content
      </SwipeRow>
    );
    
    const actionButton = screen.getByRole('button', { name: 'Custom' });
    expect(actionButton).toBeInTheDocument();
    
    fireEvent.click(actionButton);
    expect(handleAction).toHaveBeenCalledTimes(1);
  });

  it('renders correctly with multiple custom actions', () => {
    const handleAction1 = vi.fn();
    const handleAction2 = vi.fn();
    
    render(
      <SwipeRow 
        actions={[
          { label: 'Action 1', onClick: handleAction1 },
          { label: 'Action 2', onClick: handleAction2 }
        ]}
      >
        Swipe Content
      </SwipeRow>
    );
    
    expect(screen.getByRole('button', { name: 'Action 1' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action 2' })).toBeInTheDocument();
  });

  it('applies custom background colors and widths', () => {
    render(
      <SwipeRow 
        actions={[
          { label: 'Color Me', onClick: () => {}, backgroundColor: 'rgb(255, 0, 0)', width: 100 }
        ]}
      >
        Swipe Content
      </SwipeRow>
    );
    
    const btn = screen.getByRole('button', { name: 'Color Me' });
    expect(btn).toHaveStyle({ backgroundColor: 'rgb(255, 0, 0)' });
    expect(btn).toHaveStyle({ width: '100px' });
  });
});
