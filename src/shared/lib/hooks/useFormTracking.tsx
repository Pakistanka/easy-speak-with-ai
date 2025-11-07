import { useEffect } from 'react';
import { UseFormWatch, UseFormClearErrors, FieldValues } from 'react-hook-form';

export const useFormTracking = <T extends FieldValues>(
  watch: UseFormWatch<T>,
  errors: Record<string, unknown>,
  clearErrors: UseFormClearErrors<T>,
  setServerError?: (message: string | null) => void
) => {
  useEffect(() => {
    const subscription = watch((_, { name }) => {
      if (name && errors[name]) {
        clearErrors(name);
      }
      
      if (setServerError) {
        setServerError(null);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [watch, errors, clearErrors, setServerError]);
};