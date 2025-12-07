import { useTranslations } from 'next-intl';

import { Button } from '@/shared';

export const LandingHeading = () => {
  const t = useTranslations('landing');
  return (
    <section className="home-1 py-15 text-center">
      <div className="container max-w-[1304px] mx-auto px-[19px] xl:px-0">
        <div className="lg:w-[1080] m-auto">
          <h1 className="text-4xl font-bold lg:text-6xl leading-[150%] pb-6">
            {t('titleSection1_part1')}{' '}
            <span className="text-(--color-span-e)">
              {t('titleSection1_letterE')}
            </span>
            {t('titleSection1_middle')}
            <span className="text-(--color-span-s)">
              {t('titleSection1_letterS')}
            </span>
            {t('titleSection1_part2')}
          </h1>
          <p className="leading-[150%] pb-10 text-[21px]">
            {t('descriptionSection1')}
          </p>
          <Button variant="primary" size="figma_md">
            {t('buttongetStarted')}
          </Button>
        </div>
      </div>
    </section>
  );
};
