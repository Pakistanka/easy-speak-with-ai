import { ErrorHandler } from '@/shared/lib/hooks/useFormErrors';
import { FieldValues } from 'react-hook-form';

// Определяем конкретный тип для данных логина
export interface LoginFormFields extends FieldValues {
  email: string;
  password: string;
  keepLoggedIn?: boolean;
}

// Базовые обработчики ошибок для аутентификации (только критические ошибки)
export const createAuthErrorHandlers = <T extends FieldValues>(
  t: (key: string) => string
): ErrorHandler<T>[] => [
  {
    // Сетевые ошибки - используем setServerError (блокируем форму)
    condition: (error: any) => 
      error?.message?.includes('network') || 
      error?.message?.includes('timeout') ||
      error?.code === 'NETWORK_ERROR',
    action: (error, context) => {
      context.setServerError(t('errors.networkError'));
    }
  },
  {
    // Ошибка сервера (500) - используем setServerError (блокируем форму)
    condition: (error: any) => 
      error?.response.status >= 500 ||
      error?.message?.includes('server error'),
    action: (error, context) => {
      context.setServerError(t('errors.serverError'));
    }
  },
  {
    // Слишком много запросов - используем setServerError (блокируем форму)
    condition: (error: any) => error?.response?.status === 429,
    action: (error, context) => {
      context.setServerError(t('errors.tooManyRequests'));
    }
  },
  {
    // Fallback обработчик для любых других ошибок - используем setServerError
    condition: (error) => true,
    action: (error, context) => {
      context.setServerError(t('errors.somethingWentWrong'));
    }
  }
];

// Специфичные обработчики для логина с правильной типизацией
export const createLoginErrorHandlers = (
  t: (key: string) => string
): ErrorHandler<LoginFormFields>[] => [
  ...createAuthErrorHandlers<LoginFormFields>(t),
  {
    // Обработчик для неверного логина или пароля!
    condition: (error: any) => 
      error?.message?.includes('credentials') || 
      error?.message?.includes('invalid') ||
      error?.message?.includes('incorrect') ||
      error?.response?.status === 401,
    action: (error, context) => {
      
      context.setFieldError('email', t('errors.invalidCredentials'));
      context.setFieldError('password', t('errors.invalidCredentials'));
    }
  },
  {
    // Аккаунт заблокирован - используем setServerError (блокируем форму)
    condition: (error: any) => error?.message?.includes('account locked'),
    action: (error, context) => {
      context.setServerError(t('errors.accountLocked'));
    }
  }
];