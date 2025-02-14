'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import React from 'react';

function ClientDynamicProjectPage({ category }: { category?: string }) {
  const styleWhenCategorySelected = 'font-semibold !border-gray-500';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-400';
  const t = useTranslations('DynamicProjects');
  return (
    <div className=" mt-12">
      <h2 className="uppercase font-mont font-medium">{t('categories')}</h2>
      <ul
        className={`*:border-b *:border-gray-300 *:mb-2 *:pb-[1px] *:w-[120px] mt-[2px]`}
      >
        <li
          className={`${category === 'dance' ? styleWhenCategorySelected : styleOnCategoryHover}`}
        >
          <Link href="/projects/dance">{t('dance')}</Link>
        </li>
        <li
          className={`${category === 'pianism' ? styleWhenCategorySelected : styleOnCategoryHover}`}
        >
          <Link href="/projects/pianism">{t('pianism')}</Link>
        </li>
        <li
          className={` min-w-0 ${category === 'choirmastering' ? styleWhenCategorySelected : styleOnCategoryHover}`}
        >
          <Link href="/projects/choirmastering">{t('choirmastering')}</Link>
        </li>
        <li
          className={`${category === 'all' ? styleWhenCategorySelected : styleOnCategoryHover}`}
        >
          <Link href="/projects/all">{t('allProjects')}</Link>
        </li>
      </ul>
    </div>
  );
}

export default ClientDynamicProjectPage;
