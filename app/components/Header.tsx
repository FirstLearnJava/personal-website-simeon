/* 'use client';
import React, { useState } from 'react';
import MailIcon from '../../public/icons/MailIcon';
//import Link from 'next/link';
import { Link } from '@/i18n/routing';
import { InstagramIcon } from '@/public/icons/InstagramIcon';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(isMenuOpen);
  if (!isMenuOpen) {
    return (
      <nav
        className={`${isMenuOpen ? 'hidden' : 'flex fixed'} w-[100vw] justify-between px-16 xl:px-12 md:px-8 py-4 border-b-[1px]  z-50 bg-[--background] border-black text-lg font-medium`}
      >
        <div className=" text-[#333] sm:hidden">
          <ul className="flex gap-8 md:gap-6">
            <li className="hover:text-black hover:scale-[1.03] ">
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

        <ul className="flex gap-6 items-center">
          <li>
            <Link href={'https://www.instagram.com/simeonmalte'}>
              <InstagramIcon
                fill="#303030"
                className="hover:scale-105 hover:fill-black"
              />
            </Link>
          </li>
          <li>
            <Link href={'mailto:contact@simeonohlsen.com'}>
              <MailIcon
                fill="#303030"
                className="hover:scale-105 hover:fill-black"
              />
            </Link>
          </li>
          <li className="">
            <LanguageSelector />
          </li>
        </ul>
        <button
          className="hidden sm:block"
          onClick={() => {
            setIsMenuOpen(true);
          }}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6875 7.5H25.3125M4.6875 15H25.3125M4.6875 22.5H25.3125"
              stroke={'black'}
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>
    );
  }
  if (isMenuOpen) {
    return (
      <div className=" bg-tertiary w-full h-full flex flex-col gap-6 font-fraunces text-[22px]">
        <button
          onClick={() => {
            setIsMenuOpen(false);
          }}
          className="text-right mt-6 mr-6"
        >
          ✖
        </button>
        <ul className=" *:border-b-[2px] *:border-secondary flex flex-col justify-center *:h-[70px]">
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/login')}>Login</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/about')}>About Us</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/products')}>
              Catalogue
            </button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/cart')}>Cart</button>
          </li>
          <li className="flex items-center pl-6">
            <button onClick={() => handleNavigation('/faqs')}>FAQ</button>
          </li>
        </ul>
      </div>
    );
  }
};

export default Header;
 */
'use client';
import React, { useState, useEffect } from 'react';
import MailIcon from '../../public/icons/MailIcon';
import { Link, useRouter } from '@/i18n/routing';
import { InstagramIcon } from '@/public/icons/InstagramIcon';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';

const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  // Prevent scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={` fixed w-full flex justify-between px-16 xl:px-12 md:px-8 py-4 border-b-[1px] z-50 bg-[--background] border-black text-lg font-medium h-[62px] sm:[h-64px]`}
      >
        {/* Desktop Navigation (Hidden on `sm`) */}
        <div className="text-[#333] sm:hidden">
          <ul className="flex gap-8 md:gap-6">
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

        {/* Right Side Icons */}
        <ul className="flex gap-6 items-center">
          <li>
            <Link
              href={'https://www.instagram.com/simeonmalte'}
              target="_blank"
            >
              <InstagramIcon className="hover:scale-105" fill="#303030" />
            </Link>
          </li>
          <li>
            <Link href={'mailto:contact@simeonohlsen.com'}>
              <MailIcon className="hover:scale-105" fill="#303030" />
            </Link>
          </li>
          <li>
            <LanguageSelector />
          </li>
        </ul>

        {/* Hamburger Menu Button (Only on `sm`) */}
        <button
          className={`hidden ${isMenuOpen ? 'hidden' : 'sm:block  '}`}
          onClick={() => setIsMenuOpen(true)}
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.6875 7.5H25.3125M4.6875 15H25.3125M4.6875 22.5H25.3125"
              stroke="black"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Slide-in Menu (Only visible on `sm`) */}
      <div
        className={`fixed top-0 left-0 w-3/4 h-full bg-tertiary  z-50 p-6 transform transition-transform duration-300 ease-in-out bg-white ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          className="absolute top-5 right-5 text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          ✖
        </button>

        {/* Menu Items */}
        <ul className="mt-16 space-y-9 text-xl *:border-b-[2px] *:border-blue-900 *:mr-1">
          <li>
            <button onClick={() => handleNavigation('/')}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/projects')}>
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about')}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/contact')}>
              Contact
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicked outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white opacity-50 z-40 sm:block hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
