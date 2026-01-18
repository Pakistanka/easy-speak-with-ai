import { useTranslations } from 'next-intl';

import type { TDescriptionProps } from '.';

export const ForgotDescription: React.FC<TDescriptionProps> = ({
  className,
}) => {
  const t = useTranslations('auth');

  return <div className={className}>{t('forgotDescription')}</div>;
};
