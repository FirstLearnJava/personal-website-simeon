import Projects from '@/app/components/Projects';
import { Link } from '@/i18n/routing';
import React from 'react';
import { useTranslations } from 'next-intl';

export default function ProjectPage(props: {
  params: { category?: string | undefined };
}) {
  const { category } = props.params;
  const resolvedCategory = category;
  const styleWhenCategorySelected = 'font-semibold !border-gray-500';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-400';
  const t = useTranslations('DynamicProjects');

  return (
    <div className="flex justify-center text-base gap-[300px] -ml-[500px] ">
      <div className=" mt-12">
        <h2 className="uppercase font-mont font-medium">{t('categories')}</h2>
        <ul
          className={`*:border-b *:border-gray-300 *:mb-2 *:pb-[1px] *:w-[120px] mt-[2px]`}
        >
          <li
            className={`${resolvedCategory === 'dance' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/dance">{t('dance')}</Link>
          </li>
          <li
            className={`${resolvedCategory === 'pianism' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/pianism">{t('pianism')}</Link>
          </li>
          <li
            className={` min-w-0 ${resolvedCategory === 'choirmastering' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/choirmastering">{t('choirmastering')}</Link>
          </li>
          <li
            className={`${resolvedCategory === 'all' ? styleWhenCategorySelected : styleOnCategoryHover}`}
          >
            <Link href="/projects/all">{t('allProjects')}</Link>
          </li>
        </ul>
      </div>
      <Projects category={resolvedCategory} />
    </div>
  );
}
