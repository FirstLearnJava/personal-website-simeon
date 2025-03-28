import SubscribeForm from '@/app/components/SubscribeForm';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterPage() {
  const t = useTranslations('Newsletter');
  return (
    <div className="flex flex-col items-center mt-[62px] font-medium bg-projectBackground min-h-[calc(100vh-112px)] pb-5 px-7">
      <h1 className="mt-12 xl:mt-11 lg:mt-16  font-mont text-[36px] xl:text-[28px] lg:text-[36px] mb-7 xxl:mb-5 xl:mb-2 lg:mb-0 md:hidden text-center">
        {t('welcomeToNewsletter')}
      </h1>
      <h1 className="mt-12 xl:mt-11 lg:mt-16 sm:mt-12 xs:mt-10 font-mont text-[34px] md:text-[34px] sm:text-[30px] xs:text-[30px] mb-7 xxl:mb-5 xl:mb-0  sm:mb-0 text-center minmd:hidden">
        {t('welcomeToNewsletterShortVersion')}
      </h1>

      <SubscribeForm />
      <div className="w-[720px] xxl:w-[660px] xl:w-[600px] sm:w-full mt-16 xxl:mt-14 lg:mt-[70px] text-base flex flex-col gap-[2px] sm:gap-[6px]">
        <h2 className="font-semibold text-lg">{t('newsletterInfos')}</h2>
        <p>{t('doubleOptIn')}</p>
        <p>{t('optOut')}</p>
        <p>{t('optionalNameDeclaration')}</p>{' '}
        <p>{t('privacyInformationInfo')}</p>
      </div>
    </div>
  );
}
