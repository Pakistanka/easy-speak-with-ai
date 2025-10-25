'use client';

import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
] as const;

export default function LangSwitcher() {
  const t = useTranslations('common');
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Extract locale from pathname
  const pathLocale = pathname.split('/')[1];
  const locale = locales.find(l => l.code === pathLocale)?.code || 'en';
  
  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  // Close dropdown when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen]);

  const handleLocaleChange = (newLocale: string) => {
    // Close dropdown first
    setIsOpen(false);
    
    // Remove the current locale from the pathname
    const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '') || '/';
    
    // Navigate to the new locale using window.location for immediate update
    window.location.href = `/${newLocale}${pathWithoutLocale}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors duration-200 p-2 rounded-md hover:bg-[var(--muted)]"
        aria-label={t('language')}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{currentLocale.flag}</span>
        <span className="hidden md:inline">{currentLocale.code.toUpperCase()}</span>
      </button>

      {isOpen && (
        <>
          {/* Dropdown */}
          <div className="absolute right-0 top-full mt-2 w-48 bg-[var(--background)] border border-[var(--border)] rounded-md shadow-lg z-50 py-1">
            {locales.map((loc) => (
              <button
                key={loc.code}
                type="button"
                onClick={() => handleLocaleChange(loc.code)}
                className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200 ${
                  locale === loc.code 
                    ? 'text-[var(--primary)] bg-[var(--primary)]/10 border-l-2 border-l-[var(--primary)]' 
                    : 'text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)]'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{loc.flag}</span>
                  <span className={`font-medium ${
                    locale === loc.code ? 'text-[var(--primary)]' : ''
                  }`}>{loc.name}</span>
                </div>
                {locale === loc.code && (
                  <div className="flex items-center space-x-1">
                    <span className="text-xs text-[var(--primary)] font-medium">
                      {locale === 'ru' ? 'активный' : 'active'}
                    </span>
                    <span className="text-[var(--primary)] text-lg">•</span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}