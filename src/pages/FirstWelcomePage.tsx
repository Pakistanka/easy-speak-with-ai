'use client';

import { RadioButtonGroup, RadioButton } from '@/shared/ui/RadioButtonGroup';
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
    <div className="font-sans max-w-[632px] pt-6 px-[19px] pb-10 lg:p-[0] flex gap-10 flex-col justify-between lg:justify-normal h-full lg:h-fit">
      <div className="space-y-[40px]">
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

      <button 
        disabled={!selectedValue} 
        onClick={handleChooseClick}
        className="w-full lg:w-auto lg:m-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
      >
        {t('choose')}
      </button>
    </div>
  );
}