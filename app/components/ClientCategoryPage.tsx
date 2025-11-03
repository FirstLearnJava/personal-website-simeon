'use client';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const ClientCategoryPage = ({ category }: { category: string }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations('DynamicProjects');
  const styleWhenCategorySelected =
    'font-semibold !border-black !italic sm:*:!border-b sm:*:border-black';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-700';
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previousY = scrollY.getPrevious();
    if (previousY) {
      if (latest > previousY && latest > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  });

  return (
    <motion.div
      variants={{ unscrolled: { y: 0 }, scrolled: { y: -62 } }}
      animate={isScrolled ? 'scrolled' : 'unscrolled'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="h-full flex flex-col mt-14 xxxl:mt-12 sm:mt-0 items-center sm:flex sm:items-center sm:justify-center"
    >
      <div className="pt-[62px] sm:pt-[144px]">
        <h2 className="uppercase font-mont font-medium tracking-widest mb-3 xl:mb-2 text-[1.0625rem] md:text-base sm:hidden">
          {t('categories')}
        </h2>
        <ul
          className={`*:border-b sm:*:border-0 *:border-gray-800 *:mb-3 sm:*:mb-0 *:pb-[1px] sm:*:pb-0  minsm:*:w-[134px] mt-[2px] sm:mt-0 sm:flex  sm:justify-around sm:w-[100vw] sm:text-lg xs:px-4`}
        >
          <li
            className={`${category === 'all' ? 'font-semibold !border-black !italic sm:*:!border-b sm:*:border-black' : ''} hidden sm:*:pb-[1px] `}
          >
            <Link href="/projects/all">{t('allProjects')}</Link>
          </li>
          <li
            className={`${category === 'dance' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/dance">{t('dance')}</Link>
          </li>
          <li
            className={`${category === 'music' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/music">{t('music')}</Link>
          </li>
          <li
            className={` min-w-0 ${category === 'art-mediation' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/art-mediation">{t('artMediation')}</Link>
          </li>
          <li
            className={`${category === 'all' ? styleWhenCategorySelected : styleOnCategoryHover} sm:hidden`}
          >
            <Link href="/projects/all">{t('allProjects')}</Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ClientCategoryPage;
