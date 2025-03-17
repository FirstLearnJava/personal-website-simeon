'use client';

import dynamic from 'next/dynamic';

const LanguageSelector = dynamic(() => import('./LanguageSelector'), {
  ssr: false,
});

const LanguageSelectorWrapper = () => {
  return <LanguageSelector />;
};

export default LanguageSelectorWrapper;
