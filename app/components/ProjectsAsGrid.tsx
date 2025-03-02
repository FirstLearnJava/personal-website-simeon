'use client';

import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import ProjectsCardAsGrid from './ProjectsCardAsGrid';
import { Project } from '../actions/fetchWordpressData';
import { usePathname } from '@/i18n/routing';

const ProjectsAsGrid = ({
  category,
  data,
}: {
  category?: string;
  data: Project[];
}) => {
  const projects = data;
  const pathname = usePathname();
  const isOnProjectsPath = pathname.includes('projects');
  const [locale, setLocale] = useState<string>('en');
  useEffect(() => {
    const cookies = new Cookies();
    const localeFromCookie = cookies.get('NEXT_LOCALE');

    if (
      localeFromCookie !== locale &&
      (localeFromCookie === 'en' || localeFromCookie === 'de')
    ) {
      setLocale(localeFromCookie);
    }
  }, []);
  return (
    <div className="h-full ">
      <div className="grid grid-cols-2 gap-24">
        {!Array.isArray(projects) || projects.length === 0 ? (
          <div
            className={`h-full text-2xl font-mont col-span-2 text-center italic pb-[7vh]  ${isOnProjectsPath ? 'pt-[10vh]' : ''}`}
          >
            <p>Projects can't be loaded at the moment.</p>
            <p>Please try again later.</p>
          </div>
        ) : (
          projects
            .filter((project) => project.acf.language.slug === locale)
            .filter((project) =>
              !category || category === 'all'
                ? true
                : project.acf.profession_type.slug === category,
            )
            .map((project, index, arr) => {
              const isLastOdd =
                arr.length % 2 !== 0 && index === arr.length - 1;

              const checkProfessionTypeForTranslate = () => {
                if (locale === 'en') {
                  return project.acf.profession_type.name;
                }
                if (locale === 'de') {
                  if (project.acf.profession_type.name === 'Dance') {
                    return 'Tanz';
                  }
                  if (project.acf.profession_type.name === 'Choirmastering') {
                    return 'Chorleitung';
                  }
                  if (project.acf.profession_type.name === 'Pianism') {
                    return 'Piano';
                  } else {
                    return project.acf.profession_type.name;
                  }
                } else {
                  return project.acf.profession_type.name;
                }
              };
              return (
                <div
                  key={project.slug}
                  className={`${isLastOdd ? 'col-span-2 flex justify-center' : ''}`}
                >
                  <ProjectsCardAsGrid
                    id={project.id}
                    professionsType={checkProfessionTypeForTranslate()}
                    title={project.acf.title}
                    publishedOnAndBy={project.acf.published_on_and_by}
                    imageUrl={project.acf.image}
                    article={project.acf.article}
                    aspectRatio={project.acf.aspect_ratio.slug}
                    locale={locale}
                  />
                </div>
              );
            })
        )}
      </div>
    </div>
  );
};

export default ProjectsAsGrid;
