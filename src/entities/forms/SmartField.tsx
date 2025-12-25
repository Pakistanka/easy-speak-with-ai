import { Controller, useFormContext } from 'react-hook-form';
import { AnimatePresence, motion } from 'framer-motion';

import { InputUI, CheckboxUI } from '@/shared/ui/inputs';
import {
  RadioButton,
  RadioButtonGroup,
} from '@/shared/ui/inputs/radioButtonGroup';

type TOptions = {
  value: string;
  title?: string;
  description?: string;
};

interface SmartFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  type: 'text' | 'password' | 'email' | 'checkbox' | 'radio-group';
  title?: string;
  options?: TOptions[];
}

export const SmartField: React.FC<SmartFieldProps> = ({
  children,
  type,
  name,
  autoComplete,
  options,
  className,
  ...props
}) => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  const errorMassage = errors[name]?.message;
  const error = Boolean(errors[name]);

  const renderField = () => {
    if (type === 'radio-group') {
      return (
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioButtonGroup
              value={field.value}
              onValueChange={field.onChange}
              className={className}
            >
              {options?.map(opt => (
                <RadioButton
                  key={opt.value}
                  value={opt.value}
                  title={opt.title}
                  error={error}
                  description={opt.description}
                />
              ))}
            </RadioButtonGroup>
          )}
        />
      );
    }

    if (type === 'checkbox') {
      return (
        <CheckboxUI
          error={error}
          className={className}
          {...props}
          {...register(name)}
        >
          {children}
        </CheckboxUI>
      );
    }

    return (
      <InputUI
        error={error}
        type={type}
        autoComplete={autoComplete}
        className={className}
        {...props}
        {...register(name)}
      />
    );
  };

  return (
    <div>
      {renderField()}

      <AnimatePresence mode="popLayout">
        {errorMassage && (
          <motion.span
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="text-[var(--input-error-color)] text-xs mt-1 block"
          >
            {String(errorMassage)}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};
