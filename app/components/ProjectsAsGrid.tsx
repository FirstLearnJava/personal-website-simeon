'use client';

import React, { useEffect, useState } from 'react';
import ProjectsCardAsGrid from './ProjectsCardAsGrid';
import { Project } from '../actions/fetchWordpressData';
import { usePathname, useRouter } from '@/i18n/routing';

const ProjectsAsGrid = ({
  category,
  data,
  locale,
}: {
  category?: string;
  data: Project[];
  locale: string;
}) => {
  const projects = data;
  const pathname = usePathname();
  const router = useRouter();
  const isOnProjectsPath = pathname.includes('projects');
  const [viewPortWidth, setViewPortWidth] = useState(640);

  useEffect(() => {
    setViewPortWidth(window.innerWidth);

    const handleResize = () => setViewPortWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (viewPortWidth < 639 && category === 'all') {
      router.replace('dance', { locale: locale });
    }
  }, [viewPortWidth]);
  //const [locale, setLocale] = useState<string>('en');

  const revisedCategory = () => {
    if (category === 'art-mediation') {
      return 'art_mediation';
    }
    return category;
  };
  /*   useEffect(() => {
    const cookies = new Cookies();
    const localeFromCookie = cookies.get('NEXT_LOCALE');

    if (
      localeFromCookie !== locale &&
      (localeFromCookie === 'en' || localeFromCookie === 'de')
    ) {
      setLocale(localeFromCookie);
    }
  }, []); */
  return (
    <div className="h-full">
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-[18%] xxl:gap-x-[16%] gap-y-28 xl:gap-y-[80px] xs:gap-y-[60px] justify-items-center">
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
              !revisedCategory() || revisedCategory() === 'all'
                ? true
                : project.acf.profession_type.slug === revisedCategory(),
            )
            .map((project, index, arr) => {
              const isLastOdd =
                arr.length % 2 !== 0 && index === arr.length - 1;
              const isJustOneProject = arr.length === 1;

              const checkProfessionTypeForTranslate = () => {
                if (locale === 'en') {
                  return project.acf.profession_type.name;
                }
                if (locale === 'de') {
                  if (project.acf.profession_type.name === 'Dance') {
                    return 'Tanz';
                  }
                  if (project.acf.profession_type.name === 'Art Mediation') {
                    return 'Kunstvermittlung';
                  }
                  if (project.acf.profession_type.name === 'Music') {
                    return 'Musik';
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
                  className={`${isLastOdd ? 'col-span-2 lg:col-span-1 lg:block lg:justify-normal flex justify-center' : ''}`}
                >
                  <ProjectsCardAsGrid
                    id={project.id}
                    professionsType={checkProfessionTypeForTranslate()}
                    title={project.acf.title}
                    publishedOnAndBy={project.acf.published_on_and_by}
                    imageUrl={project.acf.image}
                    article={project.acf.article}
                    aspectRatio={project.acf.aspect_ratio.slug}
                    copyrightImage={project.acf.copyright_image}
                    locale={locale}
                    isJustOneProject={isJustOneProject}
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
