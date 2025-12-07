'use client';

import { LandingPage } from '@/pages/LandingPage';
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
    <div className="flex flex-col items-center w-full overflow-hidden">
      <LandingPage/>
    </div>
  );
}
