import { getEnvSafely } from '@/env/config';
import { getTranslations } from 'next-intl/server';

export type TLocale = 'ru' | 'en';

interface MetadataConfig {
  locale: TLocale;
  namespace: string;
  options?: {
    openGraphImage?: string;
    urlPath?: string;
  };
}

export const BASE_URL = 'http://easy-speak.com';//нужно env

const openGraphLocale = {
  ru: 'ru_RU',
  en: 'en_US'
};

export async function generateUniversalMetadata({
  locale,
  namespace,
  options = {}
}: MetadataConfig) {
  const {
    openGraphImage = 'icons/og-default.jpg',
    urlPath = ''
  } = options;

  const t = await getTranslations({ locale, namespace });

  const title = t.has('metadata.title') ? t('metadata.title') : 'Practice Languages with AI Tutors & Real Teachers | Easy Speak';
  const description = t.has('metadata.description') ? t('metadata.description') : 'Easy Speak combines adaptive AI teachers and professional human tutors for effective language learning. Get personalized speaking practice, receive instant feedback on your pronunciation, and achieve fluency faster.';
  const keywords = t.has('metadata.keywords') ? t('metadata.keywords') : 'learn English online, AI language tutor, speaking practice, conversation practice, improve pronunciation, online language school, fluent English, English with native speakers, adaptive learning, language learning app';
  
  const url = `${BASE_URL}${locale === 'en' ? '' : `/${locale}`}${urlPath}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: openGraphLocale[locale] || 'en_US',
      url,
      siteName: 'Easy Speak',
      images: [
        {
          url: openGraphImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@AnnaPolo',
      images: [openGraphImage],
    },
    alternates: {
      canonical: url,
      languages: {
        'en': `${BASE_URL}${urlPath}`,
        'ru': `${BASE_URL}/ru${urlPath}`,
        'x-default': `${BASE_URL}${urlPath}`,
      },
    },
  };
}