/* import React from 'react';

export default function ContactPage() {
  return <div className="flex justify-center">Contactpage in progress...</div>;
} */

import React from 'react';
import aboutImage from '../../../public/about/aboutImage.jpg';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function ContactPage() {
  //const translation = useTranslations('AboutPage');
  return (
    <div className="mt-[61px] bg-[#FDFDFD] px-20 pt-8 pb-16 ">
      <h2 className="pl-24 text-[48px] font-lora tracking-[0.01em]">Contact</h2>
      <div className=" mt-14 text-[22px] font-mont flex-col ml-52 gap-32 leading-7 mr-[140px] font-medium ">
        <div className=" leading-8 w-fit">
          <p className="hover:underline">
            <Link href={'https://www.instagram.com/simeonmalte'}>
              www.instagram.com/simeonmalte
            </Link>
          </p>
          <p className="hover:underline">
            <Link href={'mailto:simeonohlsen@test.com'}>
              simeonohlsen@test.com
            </Link>
          </p>
          <p className="hover:underline">
            <Link href={'tel:+436702013512'}>+436702013512</Link>
          </p>
        </div>
        <p className="w-[400px] tracking-wide mt-3">
          Um über meine aktuellen Projekte und Termine informiert zu bleiben,
          melden Sie sich hier zu meinem Newsletter an.
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
