import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './PrevieMail.module.css';

export const SectionHome2 = () => {
  const t = useTranslations('homePage');

  return (
    <section className="home-2 pb-30">
      <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
        <div className="grid gap-4 grid-cols-1 justify-items-center xl:grid-cols-[341px_413px_1fr] xl:justify-items-stretch">
          <div className="flex flex-col w-full max-w-[352px] xl:max-w-none h-[355px] xl:h-[440px] bg-(--block-pay-background) border border-black rounded-[40px] px-5 py-5 text-(--block-pay-text)">
            <div className="pb-8 w-[286] xl:w-[300]">
              <Image
                className="w-full"
                src="/images/img-pay.webp"
                alt="Описание"
                width={300}
                height={200}
                priority
              />
            </div>
            <p className="text-[21px] xl:text-[27px] font-bold pb-4 wrap-break-word">
              {t('blockPayTitle')}
            </p>
            <p className="text-[16px] xl:text-[20px] wrap-break-word">
              {t('blockPayDescription')}
            </p>
          </div>
          <div className="flex flex-col w-full max-w-[352px] xl:max-w-none h-[374px] xl:h-[440px] bg-(--block-learn-background) rounded-[40px] px-8 py-5 text-white">
            <div className="pb-8">
              <Image
                className="w-full"
                src="/images/img-learn.webp"
                alt="Описание"
                width={300}
                height={200}
                priority
              />
            </div>
            <p className="text-[21px] xl:text-[27px] font-bold pb-4 wrap-break-word">
              {t('blockLearnTitle')}
            </p>
            <p className="text-[16px] xl:text-[20px] wrap-break-word">
              {t('blockLearnDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 w-full max-w-[352px] xl:max-w-none h-auto min-h-[402px] xl:h-[440px] bg-[url('/images/img-wrapper.webp')] bg-cover bg-center p-4 md:p-6 text-white rounded-[40px]">
            <div className="row-1">
              <p className="text-[21px] xl:text-[27px] font-bold wrap-break-word">
                {t('blockDiscoverTitle')}
              </p>
            </div>
            <div className="row-2">
              <p className="pb-4 lg:pb-8 text-[16px] xl:text-[20px] wrap-break-word">
                {t('blockDiscoverDescription')}
              </p>
            </div>
            <div className="row-3 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 lg:gap-0">
              <div className="col-1 flex justify-center lg:justify-start">
                <Image
                  className="w-full max-w-[170px] sm:max-w-60 lg:w-[170px] mr-[21px] mb-[57px] xl:mr-0 xl:mb-0 xl:w-60"
                  src="/images/img-discover.webp"
                  alt="Discover app"
                  width={240}
                  height={240}
                />
              </div>
              <div className="col-2 flex items-end justify-center lg:justify-start lg:pl-7 xl:pl-10 pb-2.5 text-center ">
                <p className="w-full max-w-[110px] sm:max-w-[110px] lg:max-w-[210px] text-[16px] lg:text-[16px] xl:text-[21px] font-bold">
                  {t('blockDiscoverBegin')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
