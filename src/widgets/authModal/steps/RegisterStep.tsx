import { useTranslations } from 'next-intl';

import { RegisterForm } from '@/features/auth-forms';

import { StepButton } from './StepButton';

import type { TStepProps } from '.';

export const RegisterStep: React.FC<TStepProps> = ({ onStepChange }) => {
  const t = useTranslations('auth');

  return (
    <>
      <RegisterForm />
      <div className="mt-2 flex gap-2 items-center justify-center text-center text-(--input-placeholder)">
        {t('haveAccount')}{' '}
        <StepButton onClick={() => onStepChange('login')}>
          {t('login')}
        </StepButton>
      </div>
    </>
  );
};
