import React from 'react';
import MailIcon from '../../public/icons/MailIcon';
//import Link from 'next/link';
import { Link } from '@/i18n/routing';
import { InstagramIcon } from '@/public/icons/InstagramIcon';
import LanguageSelector from './LanguageSelector';
import { useTranslations } from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');

  return (
    <nav className="flex w-full justify-between sm:px-20 py-5 border-b-[1px] border-[#9f9f9f] text-lg font-medium">
      <div className=" text-[#333]">
        <ul className="flex gap-8">
          <li className="hover:text-black hover:scale-[1.03]">
            <Link href="/">{t('home')}</Link>
          </li>
          <li className="hover:text-black hover:scale-[1.02]">
            <Link href="/projects">{t('projects')}</Link>
          </li>
          <li className="hover:text-black hover:scale-[1.03]">
            <Link href="/about">{t('about')}</Link>
          </li>
        </ul>
      </div>
      <div className="relative">
        <ul className="flex gap-6 items-center">
          <li>
            <Link href={'https://www.instagram.com/simeonmalte'}>
              <InstagramIcon
                fill="#888"
                className="hover:scale-105 hover:fill-black"
              />
            </Link>
          </li>
          <li>
            <Link href={'mailto:simeonohlsen@test.com'}>
              <MailIcon
                fill="#888"
                className="hover:scale-105 hover:fill-black"
              />
            </Link>
          </li>
          <li className="">
            <LanguageSelector />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
