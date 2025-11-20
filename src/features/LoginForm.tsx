import { Button } from "@/shared";
import { useAdvancedForm } from "@/shared/lib/hooks/useAdvancedForm";
import { useFormMutation } from "@/shared/lib/hooks/useFormMutation";
import { CheckboxUI } from "@/shared/ui/Checkbox";
import { Input } from "@/shared/ui/input";
import z from "zod";
import { useTranslations } from 'next-intl';
import { createLoginErrorHandlers } from "@/shared/lib/utils/authErrorUtil";

// Схема валидации с переводимыми сообщениями
const createLoginSchema = (t: (key: string) => string) => z.object({
  email: z.string()
    .min(1, t('validation.emailRequired'))
    .email(t('validation.emailInvalid')),
  password: z.string()
    .min(8, t('validation.passwordMinLength')),
  keepLoggedIn: z.boolean().optional(),
});

type LoginFormData = z.infer<ReturnType<typeof createLoginSchema>>;

interface LoginFormProps {
  forgotPasswordButton: React.ReactNode;
}

// Заглушка для API запроса
const loginUser = async (data: LoginFormData): Promise<{ success: boolean }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('Login data:', data);
      resolve({ success: true });
    }, 1000);
  });
};

export const LoginForm = ({ forgotPasswordButton }: LoginFormProps) => {
  const t = useTranslations('auth');
  
  const loginSchema = createLoginSchema(t);

  const errorHandlers = createLoginErrorHandlers(t);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    resetAllErrors,
    serverError,
  } = useAdvancedForm<LoginFormData>({
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: '',
      keepLoggedIn: false,
    },
    errorHandlers, // Передаем обработчики ошибок
  });

  const { submitForm } = useFormMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // Обработка успешного логина
      console.log('Login successful:', data);
      // Здесь можно сделать redirect и т.д.
    },
    // onError больше не нужен здесь, т.к. ошибки обрабатываются через errorHandlers
  });

  const onSubmit = async (data: LoginFormData) => {
    resetAllErrors(); // Очищаем предыдущие ошибки
    
    try {
      // Используем submitForm с formMethods для автоматической валидации
      await submitForm(data);
    } catch (error) {
      // Ошибка автоматически обрабатывается через errorHandlers в useFormErrors
      // Дополнительная обработка не требуется
      console.error('Login error:', error);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="w-full h-full space-y-2"
    >
      <Input
        title={t('email')}
        placeholder={t('emailPlaceholder')}
        type="email"
        validationMessage={errors.email?.message}
        autoComplete="email"
        {...register('email')}
      />

      <Input
        title={t('password')}
        placeholder={t('passwordPlaceholder')}
        type="password"
        validationMessage={errors.password?.message}
        autoComplete="current-password"
        {...register('password')}
      />

      <div className="flex justify-between mb-6 py-2">
        <CheckboxUI 
          validationMessage={errors.keepLoggedIn?.message}
          {...register('keepLoggedIn')}       
        >
          {t('keepLoggedIn')}
        </CheckboxUI>

        {forgotPasswordButton}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting || !!serverError}
        className="w-full"
      >
        {isSubmitting ? t('loggingIn') : (serverError ? serverError : t('login'))}
      </Button>
    </form>
  );
};