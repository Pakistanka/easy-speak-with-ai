import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { LandingForm } from './LandingForm';

//Когда будут элементы форм в мастере, заменить
export const LandingFeedback = () => {
  const t = useTranslations("landing");

  return (
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
  )
}
