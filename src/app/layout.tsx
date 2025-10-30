import { Inter, Poppins } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Toaster } from 'react-hot-toast';

import { QueryProvider } from '@/shared/providers/query';
import { ThemeProvider } from '@/shared/providers/theme';
import '@/shared/styles/globals.css';
import type { ChildrenProps } from '@/shared/types';
import MainNavbar from '@/shared/ui/Navbar';
import MainFooter from '@/widgets/Footer';
import { BASE_URL, generateUniversalMetadata, TLocale } from '@/shared/lib/metadata';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  adjustFontFallback: false,
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export async function generateMetadata({ params }: { params: { locale: TLocale } }) {
  const metadata = await generateUniversalMetadata({
    locale: params.locale,
    namespace: 'common'
  });

  return {
    ...metadata,
    authors: [{ name: 'Anastasiia Polozova' }],
    creator: 'Anastasiia Polozova',
    metadataBase: BASE_URL,
    icons: {
      icon: [
        { url: '/icons/favicon.ico' },
        { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/svg' },
        { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/svg' },
      ],
      apple: [
        { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ]
    }
  };
}

export default async function RootLayout({ children }: ChildrenProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${poppins.variable} font-sans antialiased overflow-x-hidden`}
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
