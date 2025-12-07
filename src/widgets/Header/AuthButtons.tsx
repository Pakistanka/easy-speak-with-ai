import { useTranslations } from 'next-intl';

import { Button } from '@/shared';

interface AuthButtonsProps {
  isLoggedIn: boolean;
  className?: string;
  onLogin?: () => void;
  onLogout?: () => void;
  onSignUp?: () => void;
}

export const AuthButtons = ({
  isLoggedIn,
  className = '',
  onLogin,
  onLogout,
  onSignUp,
}: AuthButtonsProps) => {
  const t = useTranslations('header');

  if (isLoggedIn) {
    return (
      <Button
        onClick={onLogout}
        variant="outline"
        size="figma_md"
        className={`border-[var(--button-outline)] bg-transparent text-[var(--text-color) ${className}`}
      >
        {t('buttons.logOut')}
      </Button>
    );
  }

  return (
    <div className={`flex gap-4 lg:gap-2 ${className}`}>
      <Button onClick={onSignUp} variant="primary" size="figma_md">
        {t('buttons.signUp')}
      </Button>
      <Button
        onClick={onLogin}
        variant="outline"
        size="figma_md"
        className="border-[var(--button-outline)] bg-transparent text-4 text-[var(--text-color)]"
      >
        {t('buttons.logIn')}
      </Button>
    </div>
  );
};
