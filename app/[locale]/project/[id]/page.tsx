import fetchWordpressData from '@/app/actions/fetchWordpressData';
import Projects from '@/app/components/Projects';
import React from 'react';

export default async function ProjectPage({ params }) {
  await console.log('ID', params.id);
  const paramsId = Number(params.id);
  const paramsLocale = params.locale;
  const data = await fetchWordpressData();
  return (
    <div className="flex justify-center mt-[60px] bg-projectBackground">
      <Projects data={data} paramsId={paramsId} paramsLocale={paramsLocale} />
    </div>
  );
}
