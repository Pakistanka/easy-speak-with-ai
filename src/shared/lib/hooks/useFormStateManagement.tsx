import { useCallback } from 'react';
import { FieldValues, UseFormSetError, UseFormClearErrors, Path } from 'react-hook-form';

interface UseFormStateManagementProps<T extends FieldValues> {
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
  setServerError?: (message: string | null) => void;
}

export const useFormStateManagement = <T extends FieldValues>({
  setError,
  clearErrors,
  setServerError
}: UseFormStateManagementProps<T>) => {
  const clearFieldError = useCallback((fieldName: Path<T>) => {
    clearErrors(fieldName);
  }, [clearErrors]);

  const clearAllErrors = useCallback(() => {
    clearErrors();
    setServerError?.(null);
  }, [clearErrors, setServerError]);

  const setFieldError = useCallback((fieldName: Path<T>, message: string) => {
    setError(fieldName, { type: 'manual', message });
  }, [setError]);

  return {
    clearFieldError,
    clearAllErrors,
    setFieldError
  };
};