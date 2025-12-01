'use client';

import React, { createContext, useState } from 'react';

interface RadioButtonGroupContextType {
  selectedValue: string | null;
  onValueChange: (value: string) => void;
}

export const RadioButtonGroupContext = createContext<
  RadioButtonGroupContextType | undefined
>(undefined);

interface RadioButtonGroupProps {
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  defaultValue = null,
  onValueChange,
  children,
  className = '',
}) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue
  );

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    onValueChange?.(value);
  };

  return (
    <RadioButtonGroupContext.Provider
      value={{ selectedValue, onValueChange: handleValueChange }}
    >
      <div className={className}>{children}</div>
    </RadioButtonGroupContext.Provider>
  );
};
