import React from 'react';
import { useTranslations } from 'next-intl';

export default function ImprintPage() {
  const t = useTranslations('Impress');
  return (
    <div className="flex justify-center font-mont text-base font-medium mt-[62px] pb-8 sm:pb-5">
      <div className="flex flex-col gap-3 sm:gap-2 w-[80%] xxl:w-[86%] lg:w-full lg:px-9 md:px-7">
        <h1 className="flex justify-center mb-8 sm:mb-3 text-[42px] lg:text-[40px] md:text-[38px] sm:text-[34px] font-mont font-semibold mt-[4.5rem] lg:mt-16 sm:mt-12">
          {t('impressTitle')}
        </h1>
        <div className="*:mt-2 lg:mt-3 mt-[3rem]">
          <p>{t('informationProvider')}</p>
          <p>Simeon Ohlsen</p>
          <p>
            <span className="font-semibold">E-Mail:</span>{' '}
            contact@simeonohlsen.com
          </p>
        </div>
        <h2 className="text-lg font-semibold mt-4">
          {t('websiteContentLiability')}
        </h2>
        <p>{t('websiteContentLiability1')}</p>
        <p>{t('websiteContentLiability2')}</p>
        <p>{t('websiteContentLiability3')}</p>
        <h2 className="text-lg font-semibold mt-4">
          {t('websiteLinkLiability')}
        </h2>
        <p>{t('websiteLinkLiability1')}</p>
        <p>{t('websiteLinkLiability2')}</p>
        <h2 className="text-lg font-semibold mt-4">{t('copyrightNotice')}</h2>
        <p>{t('copyrightNotice1')}</p>
        <p>{t('copyrightNotice2')}</p>
        <h2 className="text-lg font-semibold mt-4">{t('imageCredits')}</h2>
        <p>{t('imageCredits1')}</p>
        <h3 className="text-md font-semibold mt-2">{t('imageCredits2')}</h3>
        <p>{t('imageCredits3')} Marthe Lola Deutschmann</p>
        <p>{t('imageCredits4')}</p>
        <h2 className="text-lg font-semibold mt-4">{t('otherPresences')}</h2>
        <h3 className="text-md font-semibold mt-2">{t('otherPresences1')}</h3>
        <p>https://www.instagram.com/simeonmalte</p>
        <h2 className="text-lg font-semibold mt-4"></h2>
        <p>{t('newsletter1')}</p>
      </div>
    </div>
  );
}
