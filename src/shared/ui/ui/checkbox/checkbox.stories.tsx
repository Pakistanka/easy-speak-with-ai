import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
  },
};

// Интерактивная демонстрация
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div className="space-y-4">
        <Checkbox
          label="Interactive checkbox"
          checked={checked}
          onChange={setChecked}
        />
        <div className="text-body-small text-darkGrey">
          Status: {checked ? 'Checked' : 'Unchecked'}
        </div>
      </div>
    );
  },
};

// Группа чекбоксов
export const Group: Story = {
  render: () => {
    const [selected, setSelected] = useState<string[]>([]);
    
    const options = [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
    ];
    
    const handleChange = (id: string, checked: boolean) => {
      if (checked) {
        setSelected(prev => [...prev, id]);
      } else {
        setSelected(prev => prev.filter(item => item !== id));
      }
    };
    
    return (
      <div className="space-y-3">
        {options.map(option => (
          <Checkbox
            key={option.id}
            label={option.label}
            checked={selected.includes(option.id)}
            onChange={(checked) => handleChange(option.id, checked)}
          />
        ))}
        <div className="text-body-small text-darkGrey mt-4">
          Selected: {selected.join(', ') || 'None'}
        </div>
      </div>
    );
  },
};