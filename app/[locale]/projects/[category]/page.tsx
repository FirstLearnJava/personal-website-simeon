import React from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import ProjectsWrapper from '@/app/components/ProjectsWrapper';

export default function ProjectPage(params: {
  params: { category?: string; locale: string };
  searchParams: {};
}) {
  const resolvedParams = params.params;
  const category = resolvedParams.category ?? '';
  const styleWhenCategorySelected = 'font-semibold !border-black !italic ';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-700';
  const t = useTranslations('DynamicProjects');

  return (
    <div className="flex justify-center text-base relative bg-projectBackground mt-[61px] ">
      <div className="w-[160px] ">
        <div className="fixed w-[160px] bg-[#b9cbd8] h-full  border-black">
          <div className="h-full flex flex-col mt-14 items-center">
            <div className="">
              <h2 className="uppercase font-mont font-medium tracking-widest mb-[14px] text-[17px]">
                {t('categories')}
              </h2>
              <ul
                className={`*:border-b *:border-gray-800 *:mb-3 *:pb-[1px] *:w-[120px] mt-[2px]`}
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
                  <Link href="/projects/choirmastering">
                    {t('choirmastering')}
                  </Link>
                </li>
                <li
                  className={`${category === 'all' ? styleWhenCategorySelected : styleOnCategoryHover}`}
                >
                  <Link href="/projects/all">{t('allProjects')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <ProjectsWrapper category={category} />
      </div>
    </div>
  );
}
