'use client';

import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // тяжелый импорт
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui';
import { SmartForm, SmartField } from '@/entities/forms';

const createRegisterSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z
      .string()
      .min(1, t('validation.emailRequired'))
      .email(t('validation.emailInvalid')),
    password: z.string().min(8, t('validation.passwordMinLength')),
    keepLoggedIn: z.boolean().optional(),
  });

type RegisterFormValues = z.infer<ReturnType<typeof createRegisterSchema>>;

export const RegisterForm = () => {
  const t = useTranslations('auth');
  const registerSchema = createRegisterSchema(t);

  const mutation = useMutation({
    mutationFn: async (data: RegisterFormValues) => {
      // Имитация задержки
      await new Promise(resolve => {
        setTimeout(resolve, 1500);
      });

      // eslint-disable-next-line no-console
      console.log('API Register Success:', data);
      return { user: { email: data.email }, token: 'secret' };
    },
  });

  return (
    <SmartForm
      mutation={mutation}
      formConfig={{
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(registerSchema),
      }}
      // eslint-disable-next-line no-alert
      onSuccess={() => alert('Успешная регистрация!')}
    >
      <SmartField
        name="email"
        title={t('email')}
        type="email"
        placeholder={t('emailPlaceholder')}
        autoComplete="email"
      />
      <SmartField
        name="password"
        title={t('password')}
        type="password"
        placeholder={t('passwordPlaceholder')}
        autoComplete="new-password"
      />

      <Button type="submit" className="w-full mt-2">
        {mutation.isPending ? t('registering') : t('register')}
      </Button>
    </SmartForm>
  );
};
