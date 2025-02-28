'use client';

import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import ProjectsCardAsGrid from './ProjectsCardAsGrid';
import { Project } from '../actions/fetchWordpressData';

const ProjectsAsGrid = ({
  category,
  data,
}: {
  category?: string;
  data: Project[];
}) => {
  const projects = data;
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
    <div className="">
      <div className="grid grid-cols-2 justify-items-center">
        {!projects ? (
          <div>
            Projects can't be loaded at the moment. Please try again later.
          </div>
        ) : (
          projects
            .filter((project) => project.acf.language.slug === locale)
            .filter((project) =>
              !category || category === 'all'
                ? true
                : project.acf.profession_type.slug === category,
            )
            .map((project) => {
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
                <div key={project.slug} className="grid">
                  <ProjectsCardAsGrid
                    //professionsType={project.acf.profession_type.name}
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
