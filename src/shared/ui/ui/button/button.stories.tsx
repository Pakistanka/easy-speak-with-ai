import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../button';
import React from 'react';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    withAnimation: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
export const Secondary: Story = {
  args: { variant: 'secondary' },
};
export const Small: Story = {
  args: { size: 'sm' },
};
export const WithAnimation: Story = {
  args: { withAnimation: true },
};
