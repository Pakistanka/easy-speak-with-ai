import { useState } from 'react';

const AccordionItem = ({ title, content, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="py-3 group mb-10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center text-[var(--text-color)] text-base md:text-lg font-semibold cursor-pointer"
        aria-expanded={open}
      >
        {title}
        <span className={`ml-2 transition-transform duration-500 ease-in-out ${open ? 'rotate-360' : 'rotate-180'} stroke-current`}>
          <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M23.5 12.25L12.25 1L1 12.25" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out mt-2 text-[var(--text-color)] text-sm md:text-base ${open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {content}
      </div>
    </div>
  );
};

export const Accordion = ({ t }) => (
  <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-18 bg-[var(--background)]">
    <div>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-color)]">{t('anyQuestions')}</h2>
      <p className="text-[var(--text-color)] text-sm md:text-base">{t('faqDescription')}</p>
    </div>
    <div className="divide-y divide-[var(--color-light-blue)] bg-[var(--background)]">
      <AccordionItem
        title={t('howDoesItWork')}
        content={t('howDoesItWorkDesc')}
        defaultOpen={true}
      />
      <AccordionItem
        title={t('isAnonymous')}
        content={t('isAnonymousDesc')}
        defaultOpen={true}
      />
      <AccordionItem title={t('howToMake')} content={t('howToMakeAnswer')} />
      <AccordionItem title={t('canTrust')} content={t('canTrustAnswer')} />
      <AccordionItem title={t('howToGet')} content={t('howToGetAnswer')} />
    </div>
  </section>
);
