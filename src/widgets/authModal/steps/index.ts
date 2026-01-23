import type { AuthStep } from '../helpers';

import { LoginStep } from './LoginStep';
import { RegisterStep } from './RegisterStep';
import { ForgotStep } from './ForgotStep';

export type TStepProps = {
  // eslint-disable-next-line no-unused-vars
  onStepChange: (nextStep: AuthStep) => void;
};

export const AuthSteps: Record<AuthStep, React.FC<TStepProps>> = {
  login: LoginStep,
  register: RegisterStep,
  forgot: ForgotStep,
};
