'use client';

//import { LanguageIcon } from '@/public/icons/LanguageIcon';
import { UnitedKinglandIcon } from '../../public/icons/UnitedKinglandIcon';
import { ArrowIcon } from '@/public/icons/ArrowIcon';
import { useRouter } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

import React, { Fragment, useEffect, useState } from 'react';
//import { useParams } from 'next/navigation';
import { GermanyIcon } from '@/public/icons/GermanyIcon';

const LanguageSelector = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const pathInitials = pathname.slice(1, 3);
  const pathWithoutLocale = pathname.slice(3);

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
          <UnitedKinglandIcon className=" relative group-hover:scale-105"></UnitedKinglandIcon>
        )}

        {pathInitials === 'de' && (
          <GermanyIcon className=" relative group-hover:scale-105"></GermanyIcon>
        )}

        <ArrowIcon className="group-hover:scale-125" />
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
