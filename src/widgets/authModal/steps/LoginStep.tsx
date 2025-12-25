import { useTranslations } from 'next-intl';

import { LoginForm } from '@/features/auth-forms';

import { StepButton } from './StepButton';

import type { TStepProps } from '.';

export const LoginStep: React.FC<TStepProps> = ({ onStepChange }) => {
  const t = useTranslations('auth');

  return (
    <>
      <LoginForm>
        <StepButton onClick={() => onStepChange('forgot')}>
          {t('forgotPassword')}
        </StepButton>
      </LoginForm>
      <div className="mt-2 flex gap-2 items-center justify-center text-center text-(--input-placeholder)">
        {t('noAccount')}{' '}
        <StepButton onClick={() => onStepChange('register')}>
          {t('register')}
        </StepButton>
      </div>
    </>
  );
};
