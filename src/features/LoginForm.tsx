import { Button } from "@/shared";
import { useAdvancedForm } from "@/shared/lib/hooks/useAdvancedForm";
import { useFormMutation } from "@/shared/lib/hooks/useFormMutation";
import { CheckboxUI } from "@/shared/ui/Checkbox";
import { InputUI } from "@/shared/ui/Input";
import z from "zod";
import { useTranslations } from 'next-intl';

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

  const {
    register,
    handleSubmit,
    formState: { errors },
    setServerError,
    clearAllErrors,
  } = useAdvancedForm<LoginFormData>({
    schema: loginSchema,
    defaultValues: {
      email: '',
      password: '',
      keepLoggedIn: false,
    },
    options: {
      validationMode: 'onChange',
    },
  });

  const { mutateAsync, isPending } = useFormMutation({
    mutationFn: loginUser,
    onError: (error) => {
      setServerError(t('loginFailed'));
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    clearAllErrors();
    try {
      await mutateAsync(data);
    } catch (error) {
      // Ошибка уже обработана в onError
    }
  };

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)} 
      className="w-full h-full space-y-2"
    >
      <InputUI
        title={t('email')}
        placeholder={t('emailPlaceholder')}
        type="email"
        validationMessage={errors.email?.message}
        autoComplete="email"
        {...register('email')}
      />

      <InputUI
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
        disabled={isPending}
        className="w-full"
      >
        {isPending ? t('loggingIn') : t('login')}
      </Button>
    </form>
  );
};