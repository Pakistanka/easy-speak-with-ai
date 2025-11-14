import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { UseFormReturn, FieldValues } from 'react-hook-form';

// Улучшенная типизация для пропсов
interface UseFormMutationProps<
  TData = unknown,
  TError = unknown,
  TVariables extends FieldValues = FieldValues
> {
  mutationFn: (data: TVariables) => Promise<TData>;
  onSuccess?: (data: TData, variables: TVariables, context?: unknown) => void;
  onError?: (error: TError, variables: TVariables, context?: unknown) => void;
  onSettled?: (data: TData | undefined, error: TError | null, variables: TVariables, context?: unknown) => void;
  mutationOptions?: Omit<UseMutationOptions<TData, TError, TVariables>, 'mutationFn'>;
}

export const useFormMutation = <
  TData,
  TError,
  TVariables extends FieldValues
>({
  mutationFn,
  onSuccess,
  onError,
  onSettled,
  mutationOptions = {}
}: UseFormMutationProps<TData, TError, TVariables>): UseMutationResult<TData, TError, TVariables> & {
  submitForm: (data: TVariables, formMethods?: UseFormReturn<TVariables>) => Promise<TData | undefined>;
} => {
  const mutation = useMutation({
    mutationFn,
    ...mutationOptions,
    onSuccess: (data, variables, context) => {
      onSuccess?.(data, variables, context);
    },
    onError: (error, variables, context) => {
      onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, context) => {
      onSettled?.(data, error, variables, context);
    },
  });

  const submitForm = async (
    data: TVariables,
    formMethods?: UseFormReturn<TVariables>
  ): Promise<TData | undefined> => {
    try {
      if (formMethods) {
        const isFormValid = await formMethods.trigger();
        if (!isFormValid) {
          return undefined;
        }
      }
      
      const result = await mutation.mutateAsync(data);
      return result;
    } catch (error) {
      throw error;
    }
  };

  return {
    ...mutation,
    submitForm,
  };
};