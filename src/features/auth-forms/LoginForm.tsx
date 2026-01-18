'use client';

import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; // тяжелый импорт
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui';
import { SmartForm, SmartField } from '@/entities/forms';

const createLoginSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    email: z
      .string()
      .min(1, t('validation.emailRequired'))
      .email(t('validation.emailInvalid')),
    password: z.string().min(1, t('validation.passwordRequired')),
    keepLoggedIn: z.boolean().optional(),
  });

type LoginFormValues = z.infer<ReturnType<typeof createLoginSchema>>;

type LoginFormProps = {
  children?: React.ReactNode;
};

export const LoginForm: React.FC<LoginFormProps> = ({ children }) => {
  const t = useTranslations('auth');
  const loginSchema = createLoginSchema(t);

  const mutation = useMutation({
    mutationFn: async (data: LoginFormValues) => {
      // Имитация задержки
      await new Promise(resolve => {
        setTimeout(resolve, 1500);
      });

      // eslint-disable-next-line no-console
      console.log('API Login Success:', data);
      return { user: { email: data.email }, token: 'secret' };
    },
  });

  return (
    <SmartForm
      mutation={mutation}
      formConfig={{
        mode: 'onBlur',
        reValidateMode: 'onSubmit',
        resolver: zodResolver(loginSchema),
      }}
      // eslint-disable-next-line no-alert
      onSuccess={() => alert('Успешный вход!')}
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
        autoComplete="current-password"
      />

      <div className="flex justify-between items-center">
        <SmartField name="keepLoggedIn" type="checkbox">
          {t('keepLoggedIn')}
        </SmartField>
        {children}
      </div>
      <Button type="submit" className="w-full mt-2">
        {mutation.isPending ? t('loggingIn') : t('login')}
      </Button>
    </SmartForm>
  );
};
