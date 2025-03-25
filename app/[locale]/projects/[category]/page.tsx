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
  const styleWhenCategorySelected =
    'font-semibold !border-black !italic sm:*:!border-b sm:*:border-black';
  const styleOnCategoryHover = 'hover:font-medium hover:border-gray-700';
  const t = await getTranslations('DynamicProjects');

  return (
    <div className="flex sm:flex-col justify-center sm:justify-start text-base relative bg-projectBackground mt-[62px] min-h-[calc(100vh-62px-50px)]">
      <div className="w-[180px] md:w-[150px] sm:w-full z-40">
        <div className="fixed sm:static md:w-[150px] w-[180px] sm:w-full bg-[#b9cbd8] h-full sm:h-14 left-0 ">
          <div className="h-full flex flex-col mt-14 sm:mt-0 items-center sm:flex sm:items-center sm:justify-center">
            <div className="">
              <h2 className="uppercase font-mont font-medium tracking-widest mb-3 xl:mb-2 text-[1.0625rem] md:text-base sm:hidden">
                {t('categories')}
              </h2>
              <ul
                className={` *:border-b sm:*:border-0 *:border-gray-800 *:mb-3 sm:*:mb-0 *:pb-[1px] sm:*:pb-0 minmd:*:w-[134px] minsm:*:w-[7rem] mt-[2px] sm:mt-0 sm:flex sm:justify-around sm:w-[100vw] sm:text-lg`}
              >
                <li
                  className={`${category === 'all' ? 'font-semibold !border-black !italic sm:*:!border-b sm:*:border-black' : 'hidden'} sm:*:pb-[1px] `}
                >
                  <Link href="/projects/all">{t('allProjects')}</Link>
                </li>
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
                  className={`${category === 'all' ? styleWhenCategorySelected : styleOnCategoryHover} sm:hidden`}
                >
                  <Link href="/projects/all">{t('allProjects')}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-14 mt-[60px] sm:mt-12 xs:mt-11">
        <ProjectsWrapper category={category} locale={locale} />
      </div>
    </div>
  );
}
