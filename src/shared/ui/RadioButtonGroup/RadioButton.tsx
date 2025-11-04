'use client';

import React, { useContext } from 'react';
import { RadioButtonGroupContext } from './RadioButtonGroup';

interface RadioButtonProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ 
  value, 
  children, 
  disabled = false
}) => {
  const context = useContext(RadioButtonGroupContext);
  
  if (!context) {
    throw new Error('RadioButton must be used within a RadioButtonGroup');
  }

  const { selectedValue, onValueChange } = context;
  const isSelected = selectedValue === value;

  const handleClick = () => {
    if (!disabled && !isSelected) {
      onValueChange(value);
    }
  };

  const baseStyles = `
    rounded-2xl
    border
    py-6
    px-4
    transition-all
    duration-200
    ease-in-out
    font-sans
    font-normal
    w-full
    text-left
    shadow-[var(--option-shadow)]
    border-[var(--option-border-color)]
  `;

  const normalStyles = `
    bg-[var(--option-primary-bg-color)]
    hover:scale-[1.01]
    active:scale-[0.99]
  `;

  const selectedStyles = `
    bg-[var(--option-accent-bg-color)]
  `;

  const disabledStyles = `
    opacity-50
    cursor-not-allowed
    hover:scale-[1]
    active:scale-[1]
  `;

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled || isSelected}
      className={`
        ${baseStyles}
        ${isSelected ? selectedStyles : normalStyles}
        ${disabled ? disabledStyles : ''}
        ${!isSelected && !disabled ? 'cursor-pointer' : ''}
      `}
    >
      {children}
    </button>
  );
};