import { useCallback, useState } from 'react';
import { FieldValues, UseFormSetError, Path } from 'react-hook-form';

interface UseErrorHandlerProps<T extends FieldValues> {
  setError: UseFormSetError<T>;
}

interface ServerError {
  message: string;
  field?: string;
}

export const useErrorHandler = <T extends FieldValues>({
  setError
}: UseErrorHandlerProps<T>) => {
  const [serverError, setServerError] = useState<string | null>(null);

  const handleError = useCallback((error: unknown) => {
    if (isApiError(error)) {
      setServerError(error.message);
      if (error.field) {
        setError(error.field as Path<T>, { 
          type: 'server', 
          message: error.message 
        });
      }
      return;
    }
    
    const errorMessage = 
      typeof error === 'string' ? error :
      error instanceof Error ? error.message :
      'An unexpected error occurred';
      
    setServerError(errorMessage);
  }, [setError]);

  const resetErrors = useCallback(() => {
    setServerError(null);
  }, []);

  return {
    serverError,
    setServerError,
    handleError,
    resetErrors,
  };
};

function isApiError(error: unknown): error is ServerError {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as ServerError).message === 'string'
  );
}