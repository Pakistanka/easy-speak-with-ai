import { useFormContext } from 'react-hook-form';

import { InputUI, CheckboxUI } from '@/shared/ui/inputs';

interface SmartFieldProps extends React.ComponentPropsWithoutRef<'input'> {
  name: string;
  title: string;
  type: string;
}

export const SmartField: React.FC<SmartFieldProps> = ({
  children,
  type,
  name,
  autoComplete,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMassage = errors[name]?.message;

  return (
    <div>
      {type === 'checkbox' ? (
        <CheckboxUI
          error={Boolean(errors[name])}
          {...props}
          {...register(name)}
        >
          {children}
        </CheckboxUI>
      ) : (
        <InputUI
          error={Boolean(errorMassage)}
          type={type}
          autoComplete={autoComplete}
          {...props}
          {...register(name)}
        />
      )}

      {errorMassage && (
        <span className="text-[var(--input-error-color)] text-xs mt-1 block">
          {String(errorMassage)}
        </span>
      )}
    </div>
  );
};
