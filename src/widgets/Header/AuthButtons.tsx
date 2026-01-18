import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/shared';

import { AuthModal } from '../authModal';
import type { AuthStep } from '../authModal/helpers';

interface AuthButtonsProps {
  isLoggedIn: boolean;
  className?: string;
}

export const AuthButtons = ({
  isLoggedIn,
  className = '',
}: AuthButtonsProps) => {
  const t = useTranslations('header');
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<AuthStep>('login');

  const handleOpenAuth = (targetStep: AuthStep) => {
    setStep(targetStep);
    setIsOpen(true);
  };

  const onLogout = () => {};

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
    <>
      <div className={`flex gap-4 lg:gap-2 ${className}`}>
        <Button
          onClick={() => {
            handleOpenAuth('register');
          }}
          variant="primary"
          size="figma_md"
        >
          {t('buttons.signUp')}
        </Button>
        <Button
          onClick={() => {
            handleOpenAuth('login');
          }}
          variant="outline"
          size="figma_md"
          className="border-[var(--button-outline)] bg-transparent text-4 text-[var(--text-color)]"
        >
          {t('buttons.logIn')}
        </Button>
      </div>
      <AuthModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialStep={step}
      />
    </>
  );
};
