'use client';
import React, { useState, useEffect } from 'react';
import MailIcon from '../../public/icons/MailIcon';
import { Link, useRouter } from '@/i18n/routing';
import { InstagramIcon } from '@/public/icons/InstagramIcon';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useAnimation,
} from 'framer-motion';

const Header = () => {
  const t = useTranslations('Header');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const instagramControls = useAnimation();
  const mailControls = useAnimation();
  const homeControls = useAnimation();
  const projectsControls = useAnimation();
  const aboutControls = useAnimation();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious();
    if (previous) {
      if (latest > previous && latest > 150) {
        setIsNavbarHidden(true);
      } else setIsNavbarHidden(false);
    }
  });
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
      <motion.nav
        variants={{
          hidden: { y: '-100%' },
          visible: { y: 0 },
        }}
        animate={isNavbarHidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={` fixed w-full flex justify-between px-16 xl:px-12 md:px-8 sm:px-7 xs:px-6 py-4 border-b-[1px] z-50 bg-[--background] border-black text-lg font-medium h-[62px] sm:[h-64px]`}
      >
        <div className="text-[#333] sm:hidden">
          <ul className="flex gap-8 md:gap-6">
            <motion.li
              className="hover:text-black"
              onHoverStart={() => {
                homeControls.start({
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.38,
                    ease: [0.25, 0.1, 0.25, 0.75],
                    damping: 1,
                  },
                });
              }}
              animate={homeControls}
              initial={{ y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.45,
              }}
            >
              <Link href="/">{t('home')}</Link>
            </motion.li>
            <motion.li
              className="hover:text-black"
              onHoverStart={() => {
                projectsControls.start({
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.38,
                    ease: [0.25, 0.1, 0.25, 0.75],
                    damping: 1,
                  },
                });
              }}
              animate={projectsControls}
              initial={{ y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.45,
              }}
            >
              <Link href="/projects">{t('projects')}</Link>
            </motion.li>
            <motion.li
              className="hover:text-black"
              onHoverStart={() => {
                aboutControls.start({
                  y: [0, -5, 0],
                  transition: {
                    duration: 0.38,
                    ease: [0.25, 0.1, 0.25, 0.75],
                    damping: 1,
                  },
                });
              }}
              animate={aboutControls}
              initial={{ y: 0, scale: 1 }}
              whileHover={{ scale: 1.03 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 20,
                duration: 0.45,
              }}
            >
              <Link href="/about">{t('about')}</Link>
            </motion.li>
          </ul>
        </div>

        <ul className="flex gap-6 items-center">
          <motion.li
            onHoverStart={() => {
              instagramControls.start({
                y: [0, -6, 0],
                transition: {
                  duration: 0.42,
                  ease: [0.25, 0.1, 0.25, 0.75],
                  damping: 1,
                },
              });
            }}
            animate={instagramControls}
            initial={{ y: 0, scale: 1 }}
            whileHover={{ scale: 1.12 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.42,
            }}
          >
            <Link
              href={'https://www.instagram.com/simeonmalte'}
              target="_blank"
            >
              <InstagramIcon fill="#303030" />
            </Link>
          </motion.li>
          <motion.li
            onHoverStart={() => {
              mailControls.start({
                y: [0, -6, 0],
                transition: {
                  duration: 0.42,
                  ease: [0.25, 0.1, 0.25, 0.75],
                  damping: 1,
                },
              });
            }}
            animate={mailControls}
            initial={{ y: 0, scale: 1 }}
            whileHover={{ scale: 1.12 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.42,
            }}
          >
            <Link href={'mailto:contact@simeonohlsen.com'}>
              <MailIcon fill="#303030" />
            </Link>
          </motion.li>
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
      </motion.nav>

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
            <button onClick={() => handleNavigation('/')}>{t('home')}</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/projects')}>
              {t('projects')}
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/about')}>
              {t('about')}
            </button>
          </li>
          <li>
            <button onClick={() => handleNavigation('/contact')}>
              {t('contact')}
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay to close menu when clicked outside */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-white opacity-40 z-40 sm:block hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
