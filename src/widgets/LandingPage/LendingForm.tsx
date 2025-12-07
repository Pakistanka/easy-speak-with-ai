import { useTranslations } from 'next-intl';
import { Button } from '@/shared';

//Когда будут элементы форм в мастере, заменить
export const LandingForm = () => {
  const t = useTranslations("landingPage");

  return (
    <form className="flex flex-col gap-6" noValidate>
      <div className="flex flex-col sm:flex-row gap-8 mb-6">
        <div className="flex flex-col w-full sm:w-1/4">
          <label htmlFor="firstName" className="mb-1 text-xs font-semibold text-[var(--text-color)]">
            {t('firstName')}
          </label>
          <input
            type="text"
            placeholder={t('firstNamePlaceholder')}
            className="w-full border border-[var(--color-light-blue)] rounded-lg p-3 focus:outline-none focus:border-[var(--color-light-blue)] focus:ring-0 transition text-sm placeholder-[var(--color-dark-grey)]"
            required
          />
        </div>
        <div className="flex flex-col w-full sm:w-1/4">
          <label htmlFor="lastName" className="mb-1 text-xs font-semibold text-[var(--text-color)]">
            {t('lastName')}
          </label>
          <input
            type="text"
            placeholder={t('lastNamePlaceholder')}
            className="w-full  border border-[var(--color-light-blue)] rounded-lg p-3 focus:outline-none focus:border-[var(--color-light-blue)] focus:ring-0 transition text-sm placeholder-[var(--color-dark-grey)]"
            required
          />
        </div>
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="email" className="mb-1 text-xs font-semibold text-[var(--text-color)]">
          {t('email')}
        </label>
        <input
          type="email"
          placeholder={t('emailPlaceholder')}
          className="w-full border border-[var(--color-light-blue)] sm:w-5/9 rounded-lg p-3 focus:outline-none focus:border-[var(--color-light-blue)] focus:ring-0 transition text-sm placeholder-[var(--color-dark-grey)]"
          required
        />
      </div>
      <div className="flex flex-col mb-6">
        <label htmlFor="message" className="mb-1 text-xs font-semibold text-[var(--text-color)]">
          {t('message')}
        </label>
        <textarea
          placeholder={t('messagePlaceholder')}
          rows={7}
          className="w-full border border-[var(--color-light-blue)] sm:w-5/9 rounded-lg p-3 focus:outline-none focus:border-[var(--color-light-blue)] focus:ring-0 transition resize-none text-sm placeholder-[var(--color-dark-grey)]"
          required
        ></textarea>
      </div>
      <label className="flex items-center gap-2 text-xs text-[var(--color-black) mb-10">
        <input type="checkbox" className="text-[var(--text-color)]" required />
        {t('termsAgreementBefore')}
        <a href="#" className="underline text-[var(--color-dark-grey)]">{t('termsAgreementLink')}</a>
        {t('termsAgreementAfter')}
      </label>
      <Button variant="primary" size="figma_lg" className="w-1/4">{t("send")}</Button>
    </form>
  )
}
