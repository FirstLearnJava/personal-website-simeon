import fetchWordpressData from '@/app/actions/fetchWordpressData';
import Projects from '@/app/components/Projects';
import React from 'react';

type Params = Promise<{ id: string; locale: string }>;

export default async function ProjectPage({ params }: { params: Params }) {
  const awaitedParams = await params;
  const paramsId = Number(awaitedParams.id);
  const paramsLocale = awaitedParams.locale;
  const data = await fetchWordpressData();
  return (
    <div className="flex justify-center pt-[62px] min-h-[calc(100vh-50px)] bg-projectBackground">
      <Projects data={data} paramsId={paramsId} paramsLocale={paramsLocale} />
    </div>
  );
}
