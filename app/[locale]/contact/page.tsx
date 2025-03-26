import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <div className="mt-[62px] bg-[#FDFDFD] px-20 xs:px-9 pt-24 lg:pt-20 sm:pt-14 xs:pt-12 pb-16 ">
      <h2 className="ml-32 xl:ml-28 lg:ml-20 md:ml-10 sm:ml-0 text-[44px] md:text-[38px] xs:text-[34px] font-lora tracking-[0.01em]">
        {t('contactPageTitle')}
      </h2>
      <div className=" mt-4 lg:mt-3 md:mt-3 text-[20px] md:text-lg font-mont flex-col ml-52 xl:ml-48 lg:ml-36 md:ml-24 sm:ml-1 gap-32 sm:gap-36 leading-7 mr-[140px] sm:mr-0 font-medium ">
        <div className="leading-8 w-fit">
          <p className="hover:underline sm:mb-1">
            <Link href={'mailto:contact@simeonohlsen.com'}>
              contact@simeonohlsen.com
            </Link>
          </p>
          {/*  <p className="hover:underline">
            <Link href={'https://www.instagram.com/simeonmalte'}>
              instagram.com/simeonmalte
            </Link>
          </p> */}
          <p className="hover:underline">
            <Link href={'tel:+436702013512'}>+436702013512</Link>
          </p>
        </div>
        <p className="w-[400px] sm:w-full tracking-wide mt-3 sm:mt-4">
          {t('newsletterInfo')}
        </p>
        <p className="sm:font-semibold">
          <Link
            href={'/newsletter'}
            className="underline font-medium hover:font-semibold font-semibold"
          >
            Newsletter
          </Link>
        </p>
      </div>
    </div>
  );
}
