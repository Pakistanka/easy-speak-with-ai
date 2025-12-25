import type { AuthStep } from '../helpers';

import { AuthDescription } from './AuthDescription';
import { ForgotDescription } from './ForgotDescription';

export type TDescriptionProps = {
  className?: string;
};

export const AuthDescriptions: Record<AuthStep, React.FC<TDescriptionProps>> = {
  login: AuthDescription,
  register: AuthDescription,
  forgot: ForgotDescription,
};
