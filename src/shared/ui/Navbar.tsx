'use client';

import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

import LangSwitcher from '../../widgets/LangSwitcher';
import ThemeToggle from '../../widgets/ThemeToggle';

export default function MainNavbar() {
  const t = useTranslations('navigation');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Extract current locale from pathname
  const currentLocale = pathname?.split('/')[1] || 'en';

  const handleToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[var(--background)]/[0.85] backdrop-blur-lg border-b border-[var(--border)] shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 max-w-full">
        <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
          <span className="text-xl sm:text-2xl font-bold font-poppins bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
            EasySpeak
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={`/${currentLocale}/posts`}
            className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          >
            {t('posts')}
          </Link>
          <LangSwitcher />
          <ThemeToggle />
        </nav>

        <button
          type="button"
          className="md:hidden text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
          onClick={handleToggle}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {mobileMenuOpen && (
          <div className="fixed inset-x-0 top-16 z-50 bg-[var(--background)] border-b border-[var(--border)] shadow-lg md:hidden animate-in slide-in-from-top duration-300 max-w-full">
            <div className="container py-6 flex flex-col space-y-4 px-4 sm:px-6 max-w-full">
              <Link
                href={`/${currentLocale}/posts`}
                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200"
                onClick={handleToggle}
              >
                {t('posts')}
              </Link>
              <div className="flex items-center justify-between">
                <LangSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
