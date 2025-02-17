'use client';

import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Cookies } from 'react-cookie';

interface Project {
  id: number;
  slug: string;
  acf: {
    profession_type: {
      name: string;
      slug: string;
    };
    title: string;
    published_on_and_by: string;
    image: string;
    article: string;
    language: {
      slug: string;
    };
  };
}

const Projects = ({ category, data }: { category?: string; data: [] }) => {
  const projects: Project[] = data;
  const [locale, setLocale] = useState<string>('en');

  useEffect(() => {
    const cookies = new Cookies();
    const localeFromCookie = cookies.get('NEXT_LOCALE');
    // TEMPORARY
    // cookie gets checked, if there is already a local cookie in the browser, the content should be adapted accordingly

    if (
      localeFromCookie !== locale &&
      (localeFromCookie === 'en' || localeFromCookie === 'de')
    ) {
      setLocale(localeFromCookie);
    }
  }, []);
  return (
    <div>
      {!projects ? (
        <div>There is an issue with the projects.</div>
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
              <div key={project.slug}>
                <ProjectsCard
                  //professionsType={project.acf.profession_type.name}
                  professionsType={checkProfessionTypeForTranslate()}
                  title={project.acf.title}
                  publishedOnAndBy={project.acf.published_on_and_by}
                  imageUrl={project.acf.image}
                  article={project.acf.article}
                  locale={locale}
                />
              </div>
            );
          })
      )}
    </div>
  );
};

export default Projects;
