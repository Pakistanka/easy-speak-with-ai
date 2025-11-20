import { useCallback, useState, useEffect } from 'react';
import { FieldValues, UseFormSetError, UseFormClearErrors, UseFormWatch, Path } from 'react-hook-form';

// Базовые типы для обработки ошибок
export interface ErrorHandlerContext<T extends FieldValues> {
  setFieldError: (fieldName: Path<T>, message: string) => void;
  setServerError: (message: string) => void;
}

export type ErrorHandler<T extends FieldValues> = {
  condition: (error: unknown) => boolean;
  action: (error: unknown, context: ErrorHandlerContext<T>) => void | Promise<void>;
};

interface UseFormErrorsProps<T extends FieldValues> {
  setError: UseFormSetError<T>;
  clearErrors: UseFormClearErrors<T>;
  watch: UseFormWatch<T>;
  errorHandlers?: ErrorHandler<T>[];
}

interface FormErrorsContext<T extends FieldValues> {
  serverError: string | null;
  handleError: (error: unknown) => void;
  resetAllErrors: () => void;
  setFieldError: (fieldName: Path<T>, message: string) => void;
  setServerError: (message: string) => void;
}

export const useFormErrors = <T extends FieldValues>({
  setError,
  clearErrors,
  watch,
  errorHandlers = []
}: UseFormErrorsProps<T>): FormErrorsContext<T> => {
  const [serverError, setServerErrorState] = useState<string | null>(null);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      setServerErrorState(null);
      
      if (name) {
        clearErrors(name);
      }
    });
    
    return () => subscription.unsubscribe();
  }, [watch, clearErrors]);

  const setFieldError = useCallback((fieldName: Path<T>, message: string) => {
    setError(fieldName, { type: 'manual', message });
  }, [setError]);

  const setServerError = useCallback((message: string) => {
    setServerErrorState(message);
  }, []);

  const handleError = useCallback((error: unknown) => {
    const context: ErrorHandlerContext<T> = {
      setFieldError,
      setServerError,
    };

    for (const handler of errorHandlers) {
      if (handler.condition(error)) {
        handler.action(error, context);
        return;
      }
    }
    
    console.warn('Unhandled error (no matching handler):', error);
  }, [setFieldError, setServerError, errorHandlers]);

  const resetAllErrors = useCallback(() => {
    setServerErrorState(null);
    clearErrors();
  }, [clearErrors]);

  return {
    serverError,
    handleError,
    resetAllErrors,
    setFieldError,
    setServerError,
  };
};