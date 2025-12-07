import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared';
import { AccordionItem } from './AccordionItem';
import { LandingForm } from './LendingForm';


export const LandingPage = () => {
  const t = useTranslations("landingPage");

  const faqItems = [
    {
      title: t('howDoesItWork'),
      content: t('howDoesItWorkDesc'),
      defaultOpen: true
    },
    {
      title: t('isAnonymous'),
      content: t('isAnonymousDesc'), 
      defaultOpen: true
    },
    {
      title: t('howToMake'),
      content: t('howToMakeAnswer')
    },
    {
      title: t('canTrust'),
      content: t('canTrustAnswer')
    },
    {
      title: t('howToGet'),
      content: t('howToGetAnswer')
    }
  ];

  return (

    <div className="min-h-screen flex items-center justify-center flex-wrap sm:py-8 sm:px-8 py-6 px-6">
      {/* Общий контейнер */}
      <section className="flex flex-col md:flex-row items-center justify-cente w-full  mx-auto gap-10 p-4 py-8">
        {/* Картинка */}
        <div className="flex justify-center md:justify-end mb-8 md:mb-0 md:order-2 flex-1 min-w-[220px]">
          <Image
            src="/images/illustration.svg"
            alt="Contact"
            width={352}
            height={356}
            className="w-full max-w-[600px] h-auto"
          />
        </div>
        {/* Форма */}
        <div className="flex flex-col bg-[var(--background)] flex-1 min-w-[320px] w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-[var(--text-color)]">
            {t('getInTouch')}
          </h2>
          <p className="text-[var(--text-color)] mb-10 text-sm sm:text-base">
            {t('contactSupport')}
          </p>
          <LandingForm />
        </div>
      </section>

      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-18 bg-[var(--background)]">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-color)]">{t('anyQuestions')}</h2>
          <p className="text-[var(--text-color)] text-sm md:text-base">{t('faqDescription')}</p>
        </div>
        <div className="divide-y divide-[var(--color-light-blue)] bg-[var(--background)]">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              defaultOpen={item.defaultOpen || false}
            >
              {item.content}
            </AccordionItem>
          ))}
        </div>
      </section>

      {/* Баннер */}
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
    </div>
  )
}
