'use client';

import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // тяжелый импорт
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui';
import { SmartForm, SmartField } from '@/entities/forms';

const createForgotSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z
      .string()
      .min(1, t('validation.emailRequired'))
      .email(t('validation.emailInvalid')),
  });

type RegisterFormValues = z.infer<ReturnType<typeof createForgotSchema>>;

export const ForgotForm = () => {
  const t = useTranslations('auth');
  const forgotSchema = createForgotSchema(t);

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      // Имитация задержки
      await new Promise(resolve => {
        setTimeout(resolve, 1500);
      });

      // eslint-disable-next-line no-console
      console.log('API Forgot Success:', data);
      return { user: { email: data.email }, token: 'secret' };
    },
  });

  return (
    <SmartForm
      mutation={mutation}
      formConfig={{
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(forgotSchema),
      }}
      onSuccess={() =>
        // eslint-disable-next-line no-alert
        alert('Письмо для обновления пароля отправлено на почту!')
      }
    >
      <SmartField
        name="email"
        title={t('email')}
        type="email"
        placeholder={t('emailPlaceholder')}
        autoComplete="email"
      />

      <Button type="submit" className="w-full mt-2">
        {mutation.isPending ? t('sending') : t('send')}
      </Button>
    </SmartForm>
  );
};
