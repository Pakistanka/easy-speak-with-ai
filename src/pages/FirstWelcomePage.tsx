'use client';

import { Button } from '@/shared';
import { RadioButtonGroup, RadioButton } from '@/shared/ui/RadioButtonGroup';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export default function FirstWelcomePage() {
  const t = useTranslations('welcome.first');
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleChooseClick = () => {
    // TODO: Добавить логику обработки выбора
    console.log('Выбран вариант:', selectedValue);
  };

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

      <div className="space-y-[40px] z-3">
        <div className="space-y-2 lg:text-center">
          <h1 className="text-[27px] lg:text-4xl font-bold">
            {t('title')}
          </h1>
          <p className="text-[16px] lg:text-[21px]">
            {t('subtitle')}
          </p>
        </div>

        <RadioButtonGroup
          defaultValue={selectedValue || undefined}
          onValueChange={setSelectedValue}
          className="space-y-4"
        >
          <RadioButton value="wantToLearn">
            <div className="flex flex-col gap-2">
              <span className="text-base font-bold">{t('learnOption.title')}</span>
              <span className="text-base">{t('learnOption.description')}</span>
            </div>
          </RadioButton>

          <RadioButton value="wantToTeach">
            <div className="flex flex-col gap-2">
              <span className="text-base font-bold">{t('teachOption.title')}</span>
              <span className="text-base">{t('teachOption.description')}</span>
            </div>
          </RadioButton>
        </RadioButtonGroup>
      </div>

      {/* <button
        disabled={!selectedValue}
        onClick={handleChooseClick}
        className="z-3 w-full lg:w-auto lg:m-auto bg-[#5666ED] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        {t('choose')}
      </button> */}

      <Button
        disabled={!selectedValue}
        onClick={handleChooseClick}
        className='z-3'
      >
         {t('choose')}
      </Button>
    </motion.div>
  );
}
