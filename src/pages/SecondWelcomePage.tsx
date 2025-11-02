'use client';

import { Button } from '@/shared';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SecondWelcomePage() {
  const t = useTranslations('welcome.second');

  const handleGetStarted = () => {
    // TODO: Добавить логику старта
    console.log('GetStarted clicked');
  };

  return (
    <motion.div 
      className="font-sans text-(--text-color) h-full lg:h-fit max-w-[1512px] pt-6 px-[19px] pb-10 lg:px-[105] lg:py-[0] grid grid-rows-[1fr_auto] lg:grid-rows-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full flex items-center justify-center lg:max-w-[631px] order-1 lg:order-2 object-contain">
        <div 
          className="absolute 
          blur-[var(--second-accent-light-blur)] 
          w-[var(--second-accent-light-w)] 
          h-[var(--second-accent-light-h)] 
          top-[var(--second-accent-light-top)] 
          left-[var(--second-accent-light-left)] 
          bg-[var(--second-accent-light-color)] 
          rotate-[var(--second-accent-light-rotate)] 
          lg:blur-[var(--second-accent-light-lg-blur)]
          lg:w-[var(--second-accent-light-lg-w)] 
          lg:h-[var(--second-accent-light-lg-h)] 
          lg:top-[var(--second-accent-light-lg-top)] 
          lg:left-[var(--second-accent-light-lg-left)] 
          lg:bg-[var(--second-accent-light-lg-color)] 
          lg:rotate-[var(--second-accent-light-lg-rotate)] 
          rounded-[30%]
          z-2
          opacity-100"
        />
        
        <div 
          className="absolute 
          blur-[var(--second-primary-light-blur)] 
          w-[var(--second-primary-light-w)] 
          h-[var(--second-primary-light-h)] 
          top-[var(--second-primary-light-top)] 
          left-[var(--second-primary-light-left)] 
          bg-[var(--second-primary-light-color)] 
          rotate-[var(--second-primary-light-rotate)] 
          lg:blur-[var(--second-primary-light-lg-blur)]
          lg:w-[var(--second-primary-light-lg-w)] 
          lg:h-[var(--second-primary-light-lg-h)] 
          lg:top-[var(--second-primary-light-lg-top)] 
          lg:left-[var(--second-primary-light-lg-left)] 
          lg:bg-[var(--second-primary-light-lg-color)] 
          lg:rotate-[var(--second-primary-light-lg-rotate)] 
          rounded-[30%]
          z-1"
        />
        <Image
          src="/images/learning-everywhere.svg"
          alt={t('imageAlt')}
          width={631}
          height={470}
          className="w-full h-auto z-3"
          priority={false} 
          loading="lazy"
        />
      </div>
      
      <div className="space-y-[40px] order-2 lg:order-1 z-3">
        <div className="space-y-4 text-center lg:text-start">
          <h1 className="text-[27px] lg:text-[61px] font-bold">
            {t('title')}
          </h1>

          <p className="lg:hidden text-[16px] lg:text-[21px]">
            {t('mobileDescription')}
          </p>

          <p className="hidden lg:block text-[16px] lg:text-[21px]">
            {t('desktopDescription')}
          </p>
        </div>

        <button 
          onClick={handleGetStarted}
          className="w-full lg:w-auto lg:m-auto bg-[#5666ED] text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
        >
          {t('getStarted')}
        </button>
      </div>
    </motion.div>
  );
}