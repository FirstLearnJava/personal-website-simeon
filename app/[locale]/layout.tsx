import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/app/components/Header';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Footer from '../components/Footer';
import { Montserrat, Lora, DM_Sans, Inter } from 'next/font/google';

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
  weight: ['300', '400', '500', '600', '700'],
});
const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dmSans',
  weight: ['300', '400', '500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Personal Website Simeon Ohlsen',
  description: `Simeon Ohlsen's introduction and projects `,
};

type Params = Promise<{ locale: string }>;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Params;
}) {
  const awaitedParams = await params;

  if (!awaitedParams?.locale) {
    notFound();
  }

  const locale = awaitedParams.locale;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`${mont.variable} ${lora.variable} ${dmSans.variable} ${inter.variable} min-w-screen min-h-screen flex flex-col z-0 ] bg-[--background]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
