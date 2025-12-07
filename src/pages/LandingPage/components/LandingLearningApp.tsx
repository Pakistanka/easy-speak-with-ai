import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const LandingLearningApp = () => {
  const t = useTranslations('landing');

  return (
    <section className="home-3 pb-30">
      <div className="container max-w-[1304px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-[19px] lx:px-0">
        <div>
          <h2 className="text-[27px] leading-[150%]  lg:text-5xl font-bold pb-6">
            {t('titleSection3')}
          </h2>
          <p className="sm:text-[16px] lg:text-[21px] ">
            {t('descriptionSection3')}
          </p>
        </div>
        <div>
          <Image
            src="/images/phone-girl.webp"
            alt="icon"
            width={600}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
};
