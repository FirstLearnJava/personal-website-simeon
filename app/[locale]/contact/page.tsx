import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactPage() {
  const t = useTranslations('ContactPage');
  return (
    <div className="mt-[61px] bg-[#FDFDFD] px-20 pt-9 pb-16 ">
      <h2 className="pl-24 text-[44px] font-lora tracking-[0.01em]">
        {t('contactPageTitle')}
      </h2>
      <div className=" mt-11 text-[20px] font-mont flex-col ml-52 gap-32 leading-7 mr-[140px] font-medium ">
        <div className="leading-8 w-fit">
          <p className="hover:underline">
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
        <p className="w-[400px] tracking-wide mt-3">
          {t('newsletterInfo')}
          <br />
          <Link
            href={'/newsletter'}
            className="underline font-medium hover:font-semibold"
          >
            Newsletter
          </Link>
        </p>
      </div>
    </div>
  );
}
