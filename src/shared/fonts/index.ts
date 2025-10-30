import localFont from 'next/font/local';

export const helvetica = localFont({
  src: [
    {
      path: './helvetica-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './helvetica-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-helvetica',
  display: 'swap',
  preload: true,
});

export const fonts = {
  helvetica: helvetica.variable
};