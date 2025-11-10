import Image from 'next/image';
import { useTranslations } from 'next-intl';

export const LandingPage = () => {
  const t = useTranslations("landingPage");

  return (

    <div className="min-h-screen flex items-center justify-center flex-wrap sm:py-8 sm:px-8 py-6 px-6">
      {/* Общий контейнер */}
      <section className="flex flex-col w-full justify-baseline md:flex-row">
        {/* Картинка */}
        <div className="flex xs:justify-start  md:justify-end xs:order-1 md:order-2">
          <Image
            src="/images/illustration.svg"
            alt="Contact"
            width={158}
            height={181}
            className="h-auto md:w-158"
          />
        </div>
        {/* Форма */}
        <div className="w-full bg-[var(--background)] flex flex-col md:h-181 md:w-158">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('getInTouch')}
          </h2>
          <p className="text-gray-600 mb-10 text-sm sm:text-base">
            {t('contactSupport')}
          </p>
          <form className="flex flex-col gap-6" noValidate>
            <div className="flex flex-col sm:flex-row gap-8 mb-6">
              <div className="flex flex-col w-full sm:w-1/4">
                <label htmlFor="firstName" className="mb-1 text-xs font-semibold text-gray-700">
                  {t('firstName')}
                </label>
                <input
                  type="text"
                  placeholder={t('firstNamePlaceholder')}
                  className="w-full  border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                  required
                />
              </div>
              <div className="flex flex-col w-full sm:w-1/4">
                <label htmlFor="lastName" className="mb-1 text-xs font-semibold text-gray-700">
                  {t('lastName')}
                </label>
                <input
                  type="text"
                  placeholder={t('lastNamePlaceholder')}
                  className="w-full  border border-gray-200 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="email" className="mb-1 text-xs font-semibold text-gray-700">
                {t('email')}
              </label>
              <input
                type="email"
                placeholder={t('emailPlaceholder')}
                className="w-full border border-gray-200 sm:w-5/9 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition text-sm"
                required
              />
            </div>
            <div className="flex flex-col mb-6">
              <label htmlFor="message" className="mb-1 text-xs font-semibold text-gray-700">
                {t('message')}
              </label>
              <textarea
                placeholder={t('messagePlaceholder')}
                rows={7}
                className="w-full border border-gray-200 sm:w-5/9 rounded-lg p-3 focus:ring focus:ring-indigo-200 transition resize-none text-sm"
                required
              ></textarea>
            </div>
            <label className="flex items-center gap-2 text-xs text-gray-600 mb-10">
              <input type="checkbox" className="accent-indigo-600" required />
              {t('termsAgreementBefore')}
              <a href="#" className="underline text-indigo-700">{t('termsAgreementLink')}</a>
              {t('termsAgreementAfter')}
            </label>
            <button
              type="submit"
              className="mt-2 sm:w-1/4 bg-indigo-600 hover:bg-indigo-700 transition text-white font-medium py-3 rounded-2xl text-sm"
            >
              {t('send')}
            </button>
          </form>
        </div>
      </section>

      {/* Аккордеон */}
      <section className="py-12 grid grid-cols-1 md:grid-cols-2 gap-18">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6">{t('anyQuestions')}</h2>
          <p className="text-gray-700 text-sm md:text-base">
            {t('faqDescription')}
          </p>
        </div>
        <div className="divide-y divide-gray-300">
          <details open className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              {t('howDoesItWork')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {t('howDoesItWorkDesc')}
            </p>
          </details>

          <details open className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              {t('isAnonymous')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {t('isAnonymousDesc')}
            </p>
          </details>

          <details className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              {t('howToMake')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {t('howToMakeAnswer')}
            </p>
          </details>

          <details className="py-3 group mb-10">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              {t('canTrust')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {t('canTrustAnswer')}
            </p>
          </details>

          <details className="py-3 group">
            <summary className="cursor-pointer text-base md:text-lg font-semibold flex justify-between items-center">
              {t('howToGet')}
              <span className="ml-2 group-open:rotate-360 transition-transform rotate-180">
                <svg width="25" height="14" viewBox="0 0 25 14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M23.5 12.25L12.25 1L1 12.25" stroke="#161616" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
              </span>
            </summary>
            <p className="text-sm md:text-base mt-2 text-gray-600">
              {t('howToGetAnswer')}
            </p>
          </details>
        </div>

      </section>

      {/* Баннер */}
      <section className="w-full bg-slate-900 rounded-3xl p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden" style={{ maxWidth: '1304px', margin: '0 auto' }}>
        <div className="absolute bottom-0 left-0 z-10 opacity-70 pointer-events-none select-none w-1/5 max-w-[320px] max-h-[187px] md:max-w-[430px] md:max-h-[251px]">
          <img src="/images/earth.svg" alt="Earth" className="w-full h-full object-contain" />
        </div>
        <div className="text-center mx-auto text-white max-w-xl z-20 flex flex-col justify-center items-center h-[287px]">
          <h2 className="text-xl md:text-3xl font-bold mb-3 leading-tight">
            {t('learnLanguageToday')}
          </h2>
          <p className="text-xs md:text-sm mb-6 leading-relaxed">
            {t('easySpeakDesc1')}
          </p>
          <a href="#" className="inline-block bg-indigo-500 hover:bg-indigo-600 py-2 px-8 rounded-full text-white font-semibold transition text-sm md:text-base shadow-md">
            {t('getStarted')}
          </a>
        </div>
      </section>


    </div>





  )
}
