/* eslint-disable jsx-a11y/anchor-is-valid */
import { useTranslations } from 'next-intl';
import Link from 'next/link';

import type { TDescriptionProps } from '.';

export const AuthDescription: React.FC<TDescriptionProps> = ({ className }) => {
  const t = useTranslations('auth.description');

  return (
    <div className={className}>
      {t('agree')}{' '}
      <Link className="text-(--text-color) hover:opacity-75" href="#">
        {t('terms')}
      </Link>{' '}
      {t('and')}{' '}
      <Link className="text-(--text-color) hover:opacity-75" href="#">
        {t('privacy')}
      </Link>
    </div>
  );
};
