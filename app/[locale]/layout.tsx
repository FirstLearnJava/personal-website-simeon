import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/app/components/Header';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Footer from '../components/Footer';

/* import { Montserrat, Lora } from 'next/font/google';

const mont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const lora = Lora({ subsets: ['latin'], variable: '--font-readex-pro' }); */

export const metadata: Metadata = {
  title: 'Personal Website Simeon Ohlsen',
  description: `Simeon Ohlsen's introduction and projects `,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale?: string };
}) {
  if (!params?.locale) {
    notFound();
  }

  const locale = params.locale;
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body
        className={`min-w-screen min-h-screen flex flex-col z-0 bg-[#fdfbfb]`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="md:px-32 md:pt-[72px] md:pb-[24px] flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
