'use client';

import FirstWelcomePage from '@/pages/FirstWelcomePage';
import SecondWelcomePage from '@/pages/SecondWelcomePage';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Home() {
  const t = useTranslations('home');
  const pathname = usePathname();

  // Extract current locale from pathname
  const currentLocale = pathname?.split('/')[1] || 'en';
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex items-center justify-center w-full h-full">
      <SecondWelcomePage />
    </div>
  );
}
