import { DefaultValues, FieldValues, useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useErrorHandler } from './useErrorHandler';
import { useFormTracking } from './useFormTracking';
import { useFormStateManagement } from './useFormStateManagement'; // Переименованный хук

interface UseAdvancedFormProps<T extends FieldValues> {
  schema?: z.ZodSchema<T>;
  defaultValues: DefaultValues<T>;
  options?: Omit<UseFormProps<T>, 'resolver' | 'defaultValues'> & {
    validationMode?: 'onChange' | 'onBlur' | 'onSubmit' | 'onTouched' | 'all';
  };
}

export const useAdvancedForm = <T extends FieldValues>({
  schema,
  defaultValues,
  options = {}
}: UseAdvancedFormProps<T>) => {
  const { validationMode = 'onChange', ...formOptions } = options;

  const formMethods = useForm<T>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...(schema && { resolver: zodResolver(schema as any) }),
    defaultValues,
    mode: validationMode,
    ...formOptions,
  });

  const { watch, clearErrors, setError, formState: { errors } } = formMethods;
  
  const { serverError, setServerError, handleError, resetErrors } = useErrorHandler({ setError });
  
  // Используем переименованный хук
  const { clearFieldError, clearAllErrors, setFieldError } = useFormStateManagement({
    setError,
    clearErrors,
    setServerError
  });

  useFormTracking(watch, errors, clearErrors, setServerError);

  return {
    ...formMethods,
    serverError,
    setServerError,
    handleError,
    resetErrors,
    clearFieldError,
    clearAllErrors,
    setFieldError,
  };
};