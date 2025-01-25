import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/routing';
import React from 'react';

const Footer = () => {
  const t = useTranslations('Footer');
  return (
    <footer className="border-t-[1px] border-[#9f9f9f] pt-4 pb-3 sm:px-20 font-medium">
      <ul className="flex w-full justify-center gap-8">
        <li>
          <Link href="/contact">{t('contact')}</Link>
        </li>
        <li>
          <Link href="/newsletter">Newsletter</Link>
        </li>
        <li>
          <Link href="/imprint">{t('imprint')}</Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
