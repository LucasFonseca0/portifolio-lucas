import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { NextUIProvider } from '@nextui-org/react';
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Poppins',
});

export const metadata: Metadata = {
  title: 'Lucas Portfolio',
  description: 'Lucas Portfolio',
  icons: {
    icon: '/favicoon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' }
    ]
  },
};

  


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
    <Head>
        <link rel="icon" href="/favicoon.ico" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <body className={`${poppins.className} bg-black text-white`}>
        <NextUIProvider>
          {children}
        </NextUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
