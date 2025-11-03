'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import aboutImage from '../../../public/about/aboutImage.webp';
import aboutImageMobile from '../../../public/about/aboutImageMobile.webp';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const ClientPage = () => {
  const translation = useTranslations('AboutPage');
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latestY) => {
    const previousY = scrollY.getPrevious();
    if (previousY) {
      if (latestY > previousY && latestY > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });
  return (
    <div className="bg-projectBackground pt-[62px] min-h-[calc(100vh-50px)]">
      <div className=" lg:flex lg:flex-col lg:items-center px-20 lg:px-12 sm:px-12 xs:px-7 pt-8 sm:pt-6 pb-8 sm:pb-6 ">
        <motion.h2
          variants={{ static: { y: 0 }, moveOnScroll: { y: -62 } }}
          animate={isScrolled ? 'moveOnScroll' : 'static'}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
          className="pl-16 xxl:pl-8 xl:pl-0 text-[44px] lg:text-[46px] md:text-[40px] xs:text-[38px] font-lora tracking-[0.01em] fixed lg:static mt-1 lg:mt-[10px] md:mt-1"
        >
          Simeon Ohlsen
        </motion.h2>
        <div className="flex flex-col items-end  mt-[137px] lg:mt-4 md:mt-3 sm:mt-[6px]  w-[calc((100vh-230px)/990*1565)] xxl:w-[60%] lg:w-[90%]  xs:w-full sm:w-full ml-auto lg:ml-0">
          <div className="">
            <Image
              alt="Simeon sitting in focused posture"
              src={aboutImage}
              className="rounded-sm sm:hidden"
              width={1565}
              height={990}
              placeholder="blur"
              priority
              //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            />
            <Image
              alt="Simeon sitting in focused posture"
              src={aboutImageMobile}
              className="rounded-md minsm:hidden "
              width={1565}
              height={990}
              placeholder="blur"
              priority
              //sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
            />
          </div>
          <p className="text-lg md:text-base sm:text-lg leading-8 sm:leading-[28px] font-dmSans mt-4 lg:mt-3 sm:mt-3 w-full sm:tracking-[0.0125rem]">
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
    </div>
  );
};
export default ClientPage;
