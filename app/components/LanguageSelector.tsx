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
    <Fragment>
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
        <ul className="absolute z-10 font-sans font-medium bg-white border border-black rounded-[4px] mt-[11px] px-1 pt-1 pb-[3px] text-base -right-[3px] w-[70px] ">
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
    </Fragment>
  );
};

export default LanguageSelector;
