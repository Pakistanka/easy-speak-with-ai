'use client';
import { Button } from '@/shared';
import { useTranslations } from 'next-intl';
import DropdownList from '@/shared/ui/DropdownList';
import choice from './choice.js';

export default function LanguageQuestions() {
  const t = useTranslations('profile.setup');
  return (
    // <div className="flex flex-col lg:flex-row justify-start lg:justify-center items-center lg:items-start w-full h-full min-h-screen p-4 lg:p-8">
    //   <div className="sticky top-8">
    //     <p>ТУТ МЕСТО ДЛЯ ЛЕВОЙ ЧАСТИ</p>
    //     {/* ТУТ МЕСТО ДЛЯ ЛЕВОЙ ЧАСТИ */}
    //   </div>
    <div className="w-full max-w-[632px] lg:ml-[104px] border-4 border-yellow-400 flex flex-col p-4 lg:p-6 min-h-[685px] transition-all duration-300">
      <div className="text-center mb-6 lg:mb-8">
        <h2>{t('nameHeading')}</h2>
        <p>{t('nameSubheading')}</p>
      </div>
      <DropdownList options={choice} />
      <div
        className="
          button_nav 
          flex 
          flex-col 
          sm:flex-row 
          sm:justify-between 
          mt-auto 
          pt-6 
          lg:pt-8
          gap-3 
          sm:gap-0
          transition-all 
          duration-300
        "
      >
        <Button
          className="
              bg-white 
              text-black 
           "
        >
          Return
        </Button>
        <Button>Next</Button>
      </div>
    </div>
    // </div>
  );
}
