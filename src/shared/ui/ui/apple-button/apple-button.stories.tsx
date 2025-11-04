import type { Meta, StoryObj } from '@storybook/react';
import { AppleButton } from './apple-button';

const meta: Meta<typeof AppleButton> = {
  title: 'UI/AppleButton',
  component: AppleButton,
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof AppleButton>;

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};