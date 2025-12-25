import { createContext, useContext } from 'react';

interface RadioButtonGroupContextType {
  selectedValue: string | null;
  // eslint-disable-next-line no-unused-vars
  onValueChange: (value: string) => void;
}

export const RadioButtonGroupContext = createContext<
  RadioButtonGroupContextType | undefined
>(undefined);

export const useRadioContext = () => {
  const context = useContext(RadioButtonGroupContext);
  if (!context)
    throw new Error('RadioButton must be used within RadioButtonGroup');
  return context;
};
