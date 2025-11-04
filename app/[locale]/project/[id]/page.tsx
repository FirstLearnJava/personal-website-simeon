import fetchWordpressData, { Project } from '@/app/actions/fetchWordpressData';
import Projects from '@/app/components/Projects';
import React from 'react';
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';

type Params = Promise<{ id: string; locale: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const paramsId = Number(awaitedParams.id);
  const data = await fetchWordpressData();
  const projectById: Project | undefined = data.find(
    (project) => project.id == paramsId,
  );
  return {
    title: projectById?.acf.title,
    description: projectById?.acf.article,
  };
}

export async function generateStaticParams() {
  const data = await fetchWordpressData();
  const dataIDs = data.map((project) => {
    return project.id;
  });
  return dataIDs;
}

export default async function ProjectPage({ params }: { params: Params }) {
  const awaitedParams = await params;
  const paramsId = Number(awaitedParams.id);
  const paramsLocale = awaitedParams.locale;
  const data = await fetchWordpressData();
  setRequestLocale(paramsLocale);
  return (
    <div className="flex justify-center pt-[62px] min-h-[calc(100vh-50px)] bg-projectBackground">
      <Projects data={data} paramsId={paramsId} paramsLocale={paramsLocale} />
    </div>
  );
}
