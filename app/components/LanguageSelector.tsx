'use client';
//import { LanguageIcon } from '@/public/icons/LanguageIcon';
import { UnitedKinglandIcon } from '../../public/icons/UnitedKinglandIcon';
import { ArrowIcon } from '@/public/icons/ArrowIcon';
import { useRouter } from '@/i18n/routing';
import { usePathname } from 'next/navigation';

import React, { Fragment, useState } from 'react';
//import { useParams } from 'next/navigation';
import { GermanyIcon } from '@/public/icons/GermanyIcon';

const LanguageSelector = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const pathInitials = pathname.slice(1, 3);
  const pathWithoutLocale = pathname.slice(3);
  //const currentLocale = locale;
  //const params = useParams();
  console.log(pathWithoutLocale);

  const changeLanguage = (locale: string) => {
    router.replace(`/${pathWithoutLocale}`, { locale: locale });
    // if needed the same function with params, I ommited it because it results in a ts-error
    // router.replace({ pathname, params }, { locale: locale });
  };

  return (
    <Fragment>
      <div
        className="flex  items-center group"
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
        <ul className="absolute z-10 bg-white border-2 border-black rounded-[4px] mt-[11px] px-1 pt-1 pb-[3px] text-base -right-[3px] font-sans w-[70px] ">
          <li>
            <button
              value={'en'}
              onClick={(e) => {
                changeLanguage(e.currentTarget.value);
              }}
              className="hover:font-semibold"
            >
              English
            </button>
          </li>
          <li>
            <button
              value={'de'}
              onClick={(e) => {
                changeLanguage(e.currentTarget.value);
              }}
              className="hover:font-semibold "
            >
              Deutsch
            </button>
          </li>
        </ul>
      )}
    </Fragment>
  );
};

/* onClick={(event) => {
  setCurrentLanguage(event.currentTarget.value);
  console.log(currentLanguage);
  changeLanguage();
}} */

export default LanguageSelector;
