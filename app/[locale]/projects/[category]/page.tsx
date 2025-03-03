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
    <div className="flex justify-center text-base relative bg-projectBackground mt-[61px] min-h-[calc(100vh-61px-53px)]">
      <div className="w-[180px] ">
        <div className="fixed w-[180px] bg-[#b9cbd8] h-full left-0">
          <div className="h-full flex flex-col mt-14 items-center">
            <div className="">
              <h2 className="uppercase font-mont font-medium tracking-widest mb-3 text-[17px]">
                {t('categories')}
              </h2>
              <ul
                className={`*:border-b *:border-gray-800 *:mb-3 *:pb-[1px] *:w-[134px] mt-[2px]`}
              >
                <li
                  className={`${category === 'dance' ? styleWhenCategorySelected : styleOnCategoryHover}`}
                >
                  <Link href="/projects/dance">{t('dance')}</Link>
                </li>
                <li
                  className={`${category === 'music' ? styleWhenCategorySelected : styleOnCategoryHover}`}
                >
                  <Link href="/projects/music">{t('music')}</Link>
                </li>
                <li
                  className={` min-w-0 ${category === 'art-mediation' ? styleWhenCategorySelected : styleOnCategoryHover}`}
                >
                  <Link href="/projects/art-mediation">
                    {t('artMediation')}
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

      <div className="my-14">
        <ProjectsWrapper category={category} />
      </div>
    </div>
  );
}
