'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import z from 'zod';
import { useMutation } from '@tanstack/react-query';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/shared';
import { SmartField, SmartForm } from '@/entities/forms';

const getOptions = (t: ReturnType<typeof useTranslations>) => {
  return [
    {
      value: 'tutor',
      title: t('learnOption.title'),
      description: t('learnOption.description'),
    },
    {
      value: 'teacher',
      title: t('teachOption.title'),
      description: t('teachOption.description'),
    },
  ];
};

const createWelcomeSchema = (t: ReturnType<typeof useTranslations>) =>
  z.object({
    role: z.string().min(1, t('validation.roleRequired')),
  });

type WelcomeFormValues = z.infer<ReturnType<typeof createWelcomeSchema>>;

export default function FirstWelcomePage() {
  const t = useTranslations('welcome.first');
  const options = getOptions(t);
  const welcomeSchema = createWelcomeSchema(t);

  const mutation = useMutation({
    mutationFn: async (data: WelcomeFormValues) => {
      // Имитация задержки
      await new Promise(resolve => {
        setTimeout(resolve, 1500);
      });

      // eslint-disable-next-line no-console
      console.log('API Welcome Success:', data);
      return { role: data.role };
    },
  });

  return (
    <motion.div
      className="relative text-(--text-color) font-sans max-w-[632px] pt-6 px-[19px] pb-10 lg:p-[0] flex gap-10 flex-col justify-between lg:justify-normal h-full lg:h-fit"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="absolute
        blur-[var(--first-accent-light-blur)]
        w-[var(--first-accent-light-w)]
        h-[var(--first-accent-light-h)]
        top-[var(--first-accent-light-top)]
        left-[var(--first-accent-light-left)]
        bg-[var(--first-accent-light-color)]
        rotate-[var(--first-accent-light-rotate)]
        lg:blur-[var(--first-accent-light-lg-blur)]
        lg:w-[var(--first-accent-light-lg-w)]
        lg:h-[var(--first-accent-light-lg-h)]
        lg:top-[var(--first-accent-light-lg-top)]
        lg:left-[var(--first-accent-light-lg-left)]
        lg:bg-[var(--first-accent-light-lg-color)]
        lg:rotate-[var(--first-accent-light-lg-rotate)]
        rounded-[30%]
        z-2
        opacity-100"
      />

      <div
        className="absolute
        blur-[var(--first-primary-light-blur)]
        w-[var(--first-primary-light-w)]
        h-[var(--first-primary-light-h)]
        top-[var(--first-primary-light-top)]
        left-[var(--first-primary-light-left)]
        bg-[var(--first-primary-light-color)]
        rotate-[var(--first-primary-light-rotate)]
        lg:blur-[var(--first-primary-light-lg-blur)]
        lg:w-[var(--first-primary-light-lg-w)]
        lg:h-[var(--first-primary-light-lg-h)]
        lg:top-[var(--first-primary-light-lg-top)]
        lg:left-[var(--first-primary-light-lg-left)]
        lg:bg-[var(--first-primary-light-lg-color)]
        lg:rotate-[var(--first-primary-light-lg-rotate)]
        rounded-[30%]
        z-1"
      />

      <SmartForm
        mutation={mutation}
        formConfig={{
          defaultValues: {
            role: '',
          },
          resolver: zodResolver(welcomeSchema),
        }}
        onSuccess={data => {
          // eslint-disable-next-line no-alert
          alert(`Добро пожаловать ${data.role}`);
        }}
      >
        <div className="space-y-[40px] z-3">
          <div className="space-y-2 lg:text-center">
            <h1 className="text-[27px] lg:text-4xl font-bold">{t('title')}</h1>
            <p className="text-[16px] lg:text-[21px]">{t('subtitle')}</p>
          </div>

          <SmartField
            name="role"
            type="radio-group"
            options={options}
            className="flex flex-col gap-3"
          />
        </div>

        <Button type="submit" className="z-3">
          {t('choose')}
        </Button>
      </SmartForm>
    </motion.div>
  );
}
