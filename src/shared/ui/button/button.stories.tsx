import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'gray',
      values: [
        { name: 'gray', value: '#F5F5F7' },
        { name: 'dark', value: '#1E1E1E' },
      ],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const FigmaPrimary: Story = {
  args: {
    variant: 'primary',
    size: 'figma_lg',
    children: 'Button',
  },
};

export const FigmaSecondary: Story = {
  args: {
    variant: 'secondary',
    size: 'figma_lg',
    children: 'Button',
  },
};

export const FigmaDark: Story = {
  args: {
    variant: 'dark',
    size: 'figma_lg',
    children: 'Button',
  },
};

export const FigmaLight: Story = {
  args: {
    variant: 'light',
    size: 'figma_lg',
    children: 'Button',
  },
};

export const FigmaPrimaryMedium: Story = {
  args: {
    variant: 'primary',
    size: 'figma_md',
    children: 'Button',
  },
};

export const FigmaSecondaryMedium: Story = {
  args: {
    variant: 'secondary',
    size: 'figma_md',
    children: 'Button',
  },
};

export const FigmaShowcase: Story = {
  render: () => (
    <div className="space-y-6 p-8 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
      {/* Large Buttons Row */}
      <div className="flex gap-6 items-center">
        <Button variant="primary" size="figma_lg">
          Button
        </Button>
        <Button variant="secondary" size="figma_lg">
          Button
        </Button>
        <Button variant="dark" size="figma_lg">
          Button
        </Button>
        <Button variant="light" size="figma_lg">
          Button
        </Button>
      </div>

      {/* Medium Buttons Row */}
      <div className="flex gap-6 items-center">
        <Button variant="primary" size="figma_md">
          Button
        </Button>
        <Button variant="secondary" size="figma_md">
          Button
        </Button>
        <Button variant="dark" size="figma_md">
          Button
        </Button>
        <Button variant="light" size="figma_md">
          Button
        </Button>
      </div>
    </div>
  ),
};
