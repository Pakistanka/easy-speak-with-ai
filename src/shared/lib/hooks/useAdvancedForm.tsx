import { DefaultValues, FieldValues, useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useFormErrors, ErrorHandler } from './useFormErrors';

interface UseAdvancedFormProps<T extends FieldValues> {
  schema?: z.ZodObject;
  defaultValues: DefaultValues<T>;
  options?: Omit<UseFormProps<T>, 'resolver' | 'defaultValues'> & {
    validationMode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  };
  errorHandlers: ErrorHandler<T>[];
}

export const useAdvancedForm = <T extends FieldValues>({
  schema,
  defaultValues,
  options = {},
  errorHandlers
}: UseAdvancedFormProps<T>) => {
  const { validationMode = 'onChange', ...formOptions } = options;

  const formMethods = useForm<T>({
    resolver: schema ? zodResolver(schema as any) : undefined,
    defaultValues,
    mode: validationMode,
    ...formOptions,
  });

  const { watch, clearErrors, setError } = formMethods;
  
  const formErrors = useFormErrors({
    setError,
    clearErrors,
    watch,
    errorHandlers
  });

  return {
    ...formMethods,
    ...formErrors,
  };
};