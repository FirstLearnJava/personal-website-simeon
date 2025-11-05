import React from 'react';
import ProjectsWrapper from '@/app/components/ProjectsWrapper';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ClientCategoryPage from './../../../components/ClientCategoryPage';
import { Metadata } from 'next';
import fetchWordpressData from '@/app/actions/fetchWordpressData';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'My Projects',
};

export async function generateStaticParams() {
  const data = await fetchWordpressData();
  const dataIDs = data.map((project) => {
    return project.id;
  });
  return dataIDs;
}

export default async function ProjectPage(params: {
  params: { category?: string; locale: string };
  searchParams: {};
  locale: string;
}) {
  const resolvedParams = await params.params;
  const category = resolvedParams.category ?? '';
  const locale = resolvedParams.locale;
  setRequestLocale(locale);
  const validCategories = ['all', 'music', 'dance', 'art-mediation'];

  if (!validCategories.includes(category)) {
    notFound();
  }

  const t = await getTranslations('DynamicProjects');
  return (
    <div className="flex sm:flex-col justify-center sm:justify-start text-base relative bg-projectBackground min-h-[calc(100vh-50px)]">
      <div className="w-[180px] md:w-[150px] sm:w-full z-40">
        <div className="fixed sm:static md:w-[160px] w-[180px] sm:w-full bg-[#b9cbd8] sm:bg-projectBackground h-full sm:h-14 left-0 ">
          <ClientCategoryPage category={category} />
        </div>
      </div>

      <div className="mb-14 mt-[122px] xxxl:mt-[110px] sm:mt-[86px] xs:mt-[90px]">
        <ProjectsWrapper category={category} locale={locale} />
      </div>
    </div>
  );
}
