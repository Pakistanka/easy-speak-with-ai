// test-button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Test/Button',
} satisfies Meta;

export default meta;

export const Test: StoryObj = {
  render: () => (
    <button className="h-14 px-14 py-4 text-lg rounded-3xl bg-blue-500 text-white">
      Test Button
    </button>
  ),
};