import { render, screen } from '@testing-library/react';
import { Button } from './button';
import React from 'react';

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);
    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();
  });

  it('applies variant and size classes', () => {
    render(
      <Button variant="secondary" size="sm">
        Small secondary
      </Button>
    );
    const btn = screen.getByRole('button', { name: /small secondary/i });
    expect(btn.className).toMatch(/bg-secondary/);
    expect(btn.className).toMatch(/h-9/);
  });
});
