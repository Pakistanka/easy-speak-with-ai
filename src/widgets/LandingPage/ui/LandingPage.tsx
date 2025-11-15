import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Button } from '@/shared';


export const LandingPage = () => {
  const t = useTranslations("landingPage");

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
        </div>
      </section>

      {/* Аккордеон */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-18 bg-[var(--background)]">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[var(--text-color)]">{t('anyQuestions')}</h2>
          <p className="text-[var(--text-color)] text-sm md:text-base">
            {t('faqDescription')}
          </p>
        </div>
        <div className="divide-y divide-[var(--color-light-blue)] bg-[var(--background)]">
          <details open className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center text-[var(--text-color)]">
              {t('howDoesItWork')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg className="stroke-current" width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-[var(--text-color)]">
              {t('howDoesItWorkDesc')}
            </p>
          </details>

          <details open className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center text-[var(--text-color)]">
              {t('isAnonymous')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg className="stroke-current" width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-[var(--text-color)]">
              {t('isAnonymousDesc')}
            </p>
          </details>

          <details className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center text-[var(--text-color)]">
              {t('howToMake')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg className="stroke-current" width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-[var(--text-color)]">
              {t('howToMakeAnswer')}
            </p>
          </details>

          <details className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center text-[var(--text-color)]">
              {t('canTrust')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg className="stroke-current" width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-[var(--text-color)]">
              {t('canTrustAnswer')}
            </p>
          </details>

          <details className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center text-[var(--text-color)]">
              {t('howToGet')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg className="stroke-current" width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-[var(--text-color)]">
              {t('howToGetAnswer')}
            </p>
          </details>
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
