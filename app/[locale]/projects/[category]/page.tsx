import React from 'react';
import { Link } from '@/i18n/routing';
import ProjectsWrapper from '@/app/components/ProjectsWrapper';
import { getTranslations } from 'next-intl/server';

export default async function ProjectPage(params: {
  params: { category?: string; locale: string };
  searchParams: {};
  locale: string;
}) {
  const resolvedParams = await params.params;
  const category = resolvedParams.category ?? '';
  const locale = resolvedParams.locale;
  const styleWhenCategorySelected = 'font-semibold !border-black !italic ';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-700';
  const t = await getTranslations('DynamicProjects');

  return (
    <div className="flex justify-center text-base relative bg-projectBackground mt-[61px] min-h-[calc(100vh-61px-49px)]">
      <div className="w-[180px] md:w-[150px]">
        <div className="fixed  md:w-[150px] w-[180px] bg-[#b9cbd8] h-full left-0">
          <div className="h-full flex flex-col mt-14 items-center">
            <div>
              <h2 className="uppercase font-mont font-medium tracking-widest mb-3 xl:mb-2 text-[1.0625rem] md:text-base">
                {t('categories')}
              </h2>
              <ul
                className={` *:border-b *:border-gray-800 *:mb-3 *:pb-[1px] *:w-[134px] md:*:w-[7rem] mt-[2px]`}
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
        <ProjectsWrapper category={category} locale={locale} />
      </div>
    </div>
  );
}
