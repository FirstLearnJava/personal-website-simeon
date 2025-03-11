import Image from 'next/image';
import React from 'react';
import aboutImage from '../../../public/about/aboutImage.jpg';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const translation = useTranslations('AboutPage');
  return (
    <div className="mt-[61px] bg-[#FDFDFD] px-20 pt-8 pb-16">
      <h2 className="pl-24 text-[44px] font-lora tracking-[0.01em]">
        Simeon Ohlsen
      </h2>
      <div className="flex flex-col items-end mt-7 w-[calc((100vh-180px)/415*626)] ml-auto">
        <div className=" h-[calc(100vh-180px)]">
          <Image
            alt="Simeon dancing"
            src={aboutImage}
            className="rounded-sm"

            // placeholder="blur"
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          />
        </div>
        <p className="text-lg leading-8 font-dmSans mt-8 w-full">
          {translation('p1')}
          <br />
          {translation('p2')}
          <br />
          {translation('p3')}
          <br />
          {translation('p4')}
          <br />
          {translation('p5')}
        </p>
      </div>
    </div>
  );
}
