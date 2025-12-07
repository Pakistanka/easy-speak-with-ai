import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { UseFormReturn, FieldValues } from 'react-hook-form';

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
  // Добавляем опцию для автоматической валидации формы
  validateForm?: boolean;
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
  mutationOptions = {},
  validateForm = true, // По умолчанию валидируем форму
}: UseFormMutationProps<TData, TError, TVariables>): UseMutationResult<TData, TError, TVariables> & {
  submitForm: (data: TVariables, formMethods?: UseFormReturn<TVariables>) => Promise<TData | undefined>;
} => {
  const mutation = useMutation({
    mutationFn,
    ...mutationOptions,
    onSuccess: (data, variables, onMutateResult, context) => {
      mutationOptions.onSuccess?.(data, variables, onMutateResult, context);
      onSuccess?.(data, variables, context);
    },
    onError: (error, variables, onMutateResult, context) => {
      mutationOptions.onError?.(error, variables, onMutateResult, context);
      onError?.(error, variables, context);
    },
    onSettled: (data, error, variables, onMutateResult, context) => {
      mutationOptions.onSettled?.(data, error, variables, onMutateResult, context);
      onSettled?.(data, error, variables, context);
    },
  });

  const submitForm = async (
    data: TVariables,
    formMethods?: UseFormReturn<TVariables>
  ): Promise<TData | undefined> => {
    try {
      // Если передан formMethods и включена валидация - валидируем форму
      if (formMethods && validateForm) {
        const isFormValid = await formMethods.trigger();
        if (!isFormValid) {
          return undefined;
        }
      }
      
      // Используем mutateAsync для получения Promise
      const result = await mutation.mutateAsync(data);
      return result;
    } catch (error) {
      // Пробрасываем ошибку для обработки в компоненте
      throw error;
    }
  };

  return {
    ...mutation,
    submitForm,
  };
};