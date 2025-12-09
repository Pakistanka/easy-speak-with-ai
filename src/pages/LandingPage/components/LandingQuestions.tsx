import { useTranslations } from 'next-intl';
import { AccordionItem } from '.';

export const LandingQuestions = () => {
  const t = useTranslations('landing');

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
  );
};