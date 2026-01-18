'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { AnimatePresence } from 'framer-motion';

import { StepWrapper, Modal } from '@/shared/ui';

import type { AuthStep } from './helpers';
import { getTitles } from './helpers';
import { AuthSteps } from './steps';
import { AuthDescriptions } from './descriptions';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialStep?: AuthStep;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialStep = 'login',
}) => {
  const t = useTranslations('auth');
  const [lastStep, setLastStep] = useState<AuthStep | null>(null);
  const [step, setStep] = useState<AuthStep>(initialStep);

  useEffect(() => {
    if (isOpen) {
      setLastStep(null);
      setStep(initialStep);
    }
  }, [isOpen]);

  const titles = getTitles(t);

  const CurrentStep = AuthSteps[step];
  const CurrentDescription = AuthDescriptions[step];

  const handleBack = useCallback(() => {
    if (!lastStep || initialStep === step) {
      onClose();
    } else if (lastStep === step) {
      if (step === 'register' || step === 'forgot') {
        setStep('login');
      } else setStep('register');
    } else {
      setStep(lastStep);
    }
  }, [lastStep, step]);

  const handleChangeStep = useCallback(
    (nextStep: AuthStep) => {
      setLastStep(step);
      setStep(nextStep);
    },
    [step]
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      onBack={handleBack}
      title={titles[step]}
    >
      <CurrentDescription className="text-xs text-(--input-placeholder) mb-6" />
      <AnimatePresence mode="wait" initial={false}>
        <StepWrapper key={step} keyName={step}>
          <CurrentStep onStepChange={handleChangeStep} />
        </StepWrapper>
      </AnimatePresence>
    </Modal>
  );
};
