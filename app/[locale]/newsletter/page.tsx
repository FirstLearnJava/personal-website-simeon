import SubscribeForm from '@/app/components/SubscribeForm';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function NewsletterPage() {
  const t = useTranslations('Newsletter');
  return (
    <div className="flex flex-col items-center mt-[62px] pb-9 font-medium">
      <h1 className="mt-14 font-mont text-[36px]">
        {t('welcomeToNewsletter')}
      </h1>
      <SubscribeForm />
      <div className="w-[720px] mt-[40px]  text-base flex flex-col gap-[2px]">
        <h2 className="font-semibold text-lg">{t('newsletterInfos')}</h2>
        <p>{t('doubleOptIn')}</p>
        <p>{t('optOut')}</p>
        <p>{t('optionalNameDeclaration')}</p>{' '}
        {/*Die Datenschutzerklärung muss noch angepasst werden*/}
        <p>{t('privacyInformationInfo')}</p>
      </div>
    </div>
  );
}
