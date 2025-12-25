'use client';

import React, { useMemo } from 'react';

import { RadioButtonGroupContext } from './RadioContext';

interface RadioButtonGroupProps {
  value: string | null;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  value,
  onValueChange,
  children,
  className = '',
}) => {
  const contextValue = useMemo(
    () => ({
      selectedValue: value,
      onValueChange,
    }),
    [value, onValueChange]
  );

  return (
    <RadioButtonGroupContext.Provider value={contextValue}>
      <div className={className} role="radiogroup">
        {children}
      </div>
    </RadioButtonGroupContext.Provider>
  );
};
