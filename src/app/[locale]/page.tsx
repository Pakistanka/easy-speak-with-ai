/* eslint-disable react/no-array-index-key */
/* eslint-disable import/no-extraneous-dependencies */

'use client';

import { LandingPage } from '@/widgets/landingPage/ui/LandingPage';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Rocket, ShieldCheck, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
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
