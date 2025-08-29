import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <div className="pt-[62px] bg-projectBackground px-20 xs:px-7 min-h-[calc(100vh-50px)]">
      <div className="pt-[4rem] lg:pt-[4.25rem] md:pt-[3.75rem] sm:pt-14 xs:pt-12 pb-16">
        <h2 className="ml-32 xl:ml-28 lg:ml-20 md:ml-10 sm:ml-0 text-[44px] md:text-[38px] xs:text-[34px] font-lora tracking-[0.01em]">
          {t('contactPageTitle')}
        </h2>
        <div className=" mt-4 lg:mt-3 md:mt-3 sm:mt-4 text-[1.25rem] md:text-lg font-dmSans flex-col ml-52 xl:ml-48 lg:ml-36 md:ml-24 sm:ml-1 gap-32 sm:gap-36 leading-7 mr-[140px] sm:mr-0 font-medium ">
          <div className="leading-8 w-fit">
            <p className="hover:underline sm:mb-1 md:text-lg">
              <Link href={'mailto:contact@simeonohlsen.com'}>
                contact@simeonohlsen.com
              </Link>
            </p>
            <p className="hover:underline sm:mb-1 md:text-lg">
              <Link href={'https://www.instagram.com/simeonmalte'}>
                instagram.com/simeonmalte
              </Link>
            </p>
            {/* <p className="hover:underline md:text-lg">
            <Link href={'tel:+436702013512'}>+436702013512</Link>
          </p> */}
          </div>
          <p className="w-[400px] sm:w-full tracking-wide mt-2 sm:mt-3 md:text-lg">
            {t('newsletterInfo')}
          </p>
          <p className="sm:font-semibold mt-[2px]">
            <Link
              href={'/newsletter'}
              className="hover:font-semibold font-semibold md:text-[1.125rem] text-[19px] underline underline-offset-4"
            >
              Newsletter
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
