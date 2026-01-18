import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared';

export const LandingFooter = () => {
  const t = useTranslations('landing');

  return (
    <section className="w-full bg-[var(--color-dark-blue)] rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden" style={{ maxWidth: '1304px', margin: '0 auto' }}>
      <div className="absolute bottom-0 left-0 z-10 opacity-70 pointer-events-none select-none w-2/5 max-w-[320px] max-h-[187px] md:w-1/5 md:max-w-[430px] md:max-h-[251px]">
        <Image
          src="/images/earth.svg"
          alt="Earth"
          layout="responsive"
          width={430}
          height={251}
          className="object-contain"
        />
      </div>

      <div className="text-center mx-auto text-[var(--color-white)] max-w-xl z-20 flex flex-col justify-center items-center h-[287px]">
        <h2 className="text-xl md:text-3xl font-bold mb-3 leading-tight">
          {t('learnLanguageToday')}
        </h2>
        <p className="text-xs md:text-sm mb-6 leading-relaxed">
          {t('easySpeakDesc1')}
        </p>
        <Button variant="primary" size="figma_lg">{t('getStarted')}</Button>
      </div>
    </section>
  );
};
