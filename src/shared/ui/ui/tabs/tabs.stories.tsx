import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './tabs';

const meta: Meta<typeof Tabs> = {
  title: 'UI/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LightSelected: Story = {
  args: {
    defaultValue: 'light',
  },
};

export const DarkSelected: Story = {
  args: {
    defaultValue: 'dark',
  },
};