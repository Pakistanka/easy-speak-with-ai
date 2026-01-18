import type { MutateOptions, UseMutationResult } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import type { UseFormProps, FieldValues } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';

interface SmartFormProps<T extends FieldValues, TData, TError, TContext>
  extends MutateOptions<TData, TError, T, TContext> {
  children: ReactNode;
  formConfig?: UseFormProps<T>;
  mutation: UseMutationResult<TData, TError, T, TContext>;
}

export const SmartForm = <T extends FieldValues, TData, TError, TContext>({
  children,
  formConfig,
  mutation,
  onSuccess,
  onSettled,
}: SmartFormProps<T, TData, TError, TContext>) => {
  const methods = useForm<T>(formConfig);

  const onSubmit = (values: T) => {
    mutation.mutate(values, {
      onSuccess,
      onError: () => {}, // когда будет апи, посмотреть как лучше прикреплять ошибки к полям
      onSettled,
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <fieldset disabled={mutation.isPending} className="flex flex-col gap-4">
          {children}
        </fieldset>
      </form>
    </FormProvider>
  );
};
