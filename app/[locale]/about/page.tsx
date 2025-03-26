import Image from 'next/image';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const translation = useTranslations('AboutPage');
  return (
    <div className="mt-[62px] md:flex md:flex-col md:items-center  bg-projectBackground px-20 lg:px-12 sm:px-12 xs:px-8 pt-8 sm:pt-6 pb-8 sm:pb-6">
      <h2 className="pl-16 xxl:pl-8 xl:pl-0 text-[44px] lg:text-[34px] md:text-[40px] xs:text-[38px] font-lora tracking-[0.01em] fixed md:static mt-1">
        Simeon Ohlsen
      </h2>
      <div className="flex flex-col items-end  mt-[137px] md:mt-4 sm:mt-[6px]  w-[calc((100vh-230px)/990*1565)] xxl:w-[60%]  xs:w-full sm:w-full ml-auto md:ml-0">
        <div className="">
          <Image
            alt="Simeon sitting in focused posture"
            src="/about/aboutImage.webp"
            className="rounded-sm sm:hidden"
            width={1565}
            height={990}
            priority
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          />
          <Image
            alt="Simeon sitting in focused posture"
            src="/about/aboutImageMobile.webp"
            className="rounded-md minsm:hidden "
            width={1565}
            height={990}
            priority
            //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
          />
        </div>
        <p className="text-lg md:text-base sm:text-lg leading-8 sm:leading-[28px] font-dmSans mt-6 md:mt-4 sm:mt-3 w-full">
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
