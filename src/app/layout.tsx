import { fonts } from '@/shared/fonts';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

import { QueryProvider } from '@/shared/providers/query';
import { ThemeProvider } from '@/shared/providers/theme';
import '@/shared/styles/globals.css';
import type { ChildrenProps } from '@/shared/types';
import MainNavbar from '@/shared/ui/Navbar';
import MainFooter from '@/widgets/Footer';

export const metadata = {
  title: 'Easy Speak | The place where you can talk with teacher and AI',
  description:
    'A highly opinionated and production-ready Next.js 15 boilerplate with TypeScript, Tailwind CSS, ESLint, Prettier, Husky, and comprehensive SEO optimization.',
  keywords:
    'next.js, boilerplate, typescript, tailwind css, eslint, prettier, husky, seo, nextjs 15, react, web development',
  authors: [{ name: 'Anastasiia Polozova' }],
  creator: 'Anastasiia Polozova',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'Easy Speak | The place where you can talk with teacher and AI',
    description:
      'Production-ready Next.js 15 boilerplate with all the essential tools',
    siteName: 'Next.js Boilerplate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Easy Speak',
    description:
      'Production-ready Next.js 15 boilerplate with all the essential tools',
    creator: '@AnnaPolo',
  },
};


export default async function RootLayout({ children }: ChildrenProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${fonts.helvetica} font-sans antialiased overflow-x-hidden`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <QueryProvider>
              <div className="flex min-h-screen bg-[var(--background)] w-full overflow-x-hidden">
                <div className="flex-1 flex flex-col w-full">
                  <MainNavbar />
                  <main className="flex-1 w-full overflow-x-hidden">
                    {children}
                  </main>
                  <MainFooter />
                </div>
              </div>
              <Toaster
                position="bottom-right"
                toastOptions={{
                  className:
                    'bg-[var(--card)] text-[var(--foreground)] border-[var(--border)]',
                  duration: 3000,
                }}
              />
            </QueryProvider>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
