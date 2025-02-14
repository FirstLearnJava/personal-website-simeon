import Projects from '@/app/components/Projects';
import React from 'react';
import ClientDynamicProjectPage from './ClientDynamicProjectPage';

export default async function ProjectPage(params: {
  params: Promise<{ category?: string; locale: string }>;
  searchParams: Promise<{}>;
}) {
  const resolvedParams = await params.params;
  const category = resolvedParams.category ?? '';

  return (
    <div className="flex justify-center text-base gap-[200px] -ml-[300px] ">
      <ClientDynamicProjectPage category={category} />
      <Projects category={category} />
    </div>
  );
}
