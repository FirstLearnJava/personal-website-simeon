import SubscribeForm from '@/app/components/SubscribeForm';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterPage() {
  const t = useTranslations('Newsletter');
  return (
    <div className="flex flex-col items-center mt-[62px] font-medium bg-projectBackground min-h-[calc(100vh-112px)] pb-5 px-7">
      <h1 className="mt-12 xl:mt-11 lg:mt-16  font-mont text-[34px] xl:text-[28px] mb-7 xxl:mb-5 xl:mb-2 lg:mb-4 md:hidden">
        {t('welcomeToNewsletter')}
      </h1>
      <h1 className="mt-12 xl:mt-11 lg:mt-16 font-mont text-[34px] xl:text-[28px] mb-7 xxl:mb-5 xl:mb-2 lg:mb-4 text-center minmd:hidden">
        {t('welcomeToNewsletterShortVersion')}
      </h1>

      <SubscribeForm />
      <div className="w-[720px] xxl:w-[660px] xl:w-[600px] sm:w-full mt-16 xxl:mt-14 lg:mt-[80px] text-base flex flex-col gap-[2px] sm:gap-[6px]">
        <h2 className="font-semibold text-lg">{t('newsletterInfos')}</h2>
        <p>{t('doubleOptIn')}</p>
        <p>{t('optOut')}</p>
        <p>{t('optionalNameDeclaration')}</p>{' '}
        <p>{t('privacyInformationInfo')}</p>
      </div>
    </div>
  );
}
