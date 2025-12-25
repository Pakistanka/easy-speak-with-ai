import type { useTranslations } from 'next-intl';

export type AuthStep = 'login' | 'register' | 'forgot';

export const getTitles = (
  t: ReturnType<typeof useTranslations>
): Record<AuthStep, string> => {
  return {
    login: t('title'),
    register: t('title'),
    forgot: t('forgotPassword'),
  };
};

export const getDescription = (
  t: ReturnType<typeof useTranslations>
): Record<AuthStep, string> => {
  return {
    login: t('title'),
    register: t('title'),
    forgot: t('forgotPassword'),
  };
};
