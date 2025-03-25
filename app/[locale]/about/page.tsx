import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const translation = useTranslations('AboutPage');
  return (
    <div className="mt-[62px] bg-[#FDFDFD] px-20 pt-8 pb-8">
      <h2 className="pl-24 text-[44px] font-lora tracking-[0.01em] fixed mt-1">
        Simeon Ohlsen
      </h2>
      <div className="flex flex-col items-end mt-[93px] w-[calc((100vh-186px)/990*1565)] mr-2 ml-auto">
        <div className=" ">
          <Image
            alt="Simeon sitting in focused posture"
            src="/about/aboutImage.jpg"
            className="rounded-sm"
            width={1500}
            height={1200}
            priority
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          />
        </div>
        <p className="text-lg leading-8 font-dmSans mt-6 w-full">
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
