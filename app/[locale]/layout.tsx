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
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as never)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`w-full h-full z-0 bg-[#fdfbfb]`}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="md:px-32 md:py-[72px]">{children}</div>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
