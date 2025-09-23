'use client';

import { UnitedKinglandIcon } from '../../public/icons/UnitedKinglandIcon';
import { ArrowIcon } from '@/public/icons/ArrowIcon';
import { useRouter } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { GermanyIcon } from '@/public/icons/GermanyIcon';

const LanguageSelector = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const pathInitials = pathname.slice(1, 3);
  const pathWithoutLocale = pathname.slice(3);
  const languageSelectorControls = useAnimation();

  const changeLanguage = (locale: string) => {
    const scrollY = window.scrollY;
    sessionStorage.setItem(pathWithoutLocale, scrollY.toString());
    if (pathInitials !== locale) {
      router.replace(`/${pathWithoutLocale}`, { locale: locale });
    } else setIsDropDownOpen(false);
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem(pathWithoutLocale);
    if (savedScrollPosition !== null) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }
  }, [pathname]);

  useEffect(() => {
    setIsDropDownOpen(false);
  }, [pathname]);
  return (
    <div className="relative">
      <div
        className="flex items-center group"
        onClick={() => {
          setIsDropDownOpen(!isDropDownOpen);
        }}
      >
        {pathInitials !== 'de' && (
          <motion.div
            onHoverStart={() => {
              languageSelectorControls.start({
                y: [0, -6, 0],
                transition: {
                  duration: 0.42,
                  ease: [0.25, 0.1, 0.25, 0.75],
                  damping: 1,
                },
              });
            }}
            animate={languageSelectorControls}
            initial={{ y: 0, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.42,
            }}
          >
            <UnitedKinglandIcon className=" relative group-hover:scale-105"></UnitedKinglandIcon>
          </motion.div>
        )}

        {pathInitials === 'de' && (
          <motion.div
            onHoverStart={() => {
              languageSelectorControls.start({
                y: [0, -6, 0],
                transition: {
                  duration: 0.45,
                  ease: [0.25, 0.1, 0.25, 1.0],
                  damping: 1,
                },
              });
            }}
            animate={languageSelectorControls}
            initial={{ y: 0, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.5,
            }}
          >
            <GermanyIcon className=" relative group-hover:scale-105"></GermanyIcon>
          </motion.div>
        )}

        <motion.div>
          <ArrowIcon className="group-hover:scale-125" />
        </motion.div>
      </div>
      {isDropDownOpen && (
        <ul className="absolute z-10 font-sans font-medium bg-white border border-black rounded-[4px] mt-[11px] sm:mt-[12px] px-[6px] pt-1 sm:pt-2 sm:pb-2 pb-[3px] text-base sm:text-lg minsm:-right-[4px] sm:-right-[10px] w-[70px] sm:w-[5.25rem] sm:space-y-2 ">
          <li>
            <button
              value={'en'}
              onClick={(e) => {
                changeLanguage(e.currentTarget.value);
              }}
              className="hover:font-bold"
            >
              {/* {t('english')} */}English
            </button>
          </li>
          <li>
            <button
              value={'de'}
              onClick={(e) => {
                changeLanguage(e.currentTarget.value);
              }}
              className="hover:font-bold"
            >
              {/* {t('german')} */}Deutsch
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
