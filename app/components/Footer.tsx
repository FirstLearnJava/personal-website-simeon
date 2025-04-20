import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import React from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t-[1px] border-[#9f9f9f] pt-3 pb-2 px-20 sm:px-7 font-medium z-50 bg-white text-lg h-[50px]">
      <ul className="flex w-full justify-center sm:justify-between lg:gap-8 gap-32">
        <li className="hover:scale-105">
          <Link href="/contact">{t('contact')}</Link>
        </li>
        <li className="hover:scale-105">
          <Link href="/newsletter">Newsletter</Link>
        </li>
        <li className="hover:scale-105">
          <Link href="/imprint">{t('imprint')}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
