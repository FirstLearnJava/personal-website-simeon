'use client';

import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import { Project } from '../actions/fetchWordpressData';
import { redirect } from '@/i18n/routing';

const Projects = ({
  data,
  paramsId,
  paramsLocale,
}: {
  data: Project[];
  paramsId: number;
  paramsLocale: string;
}) => {
  const projectById: Project | undefined = data.find(
    (project) => project.id == paramsId,
  );
  const actualLocaleProjectImageUrl = projectById?.acf.image;

  const projectsFilteredByImage = data.filter(
    (project) => project.acf.image === actualLocaleProjectImageUrl,
  );
  const projectInOtherLanguage: Project | undefined =
    projectsFilteredByImage.find(
      (project) => project.acf.language.slug === paramsLocale,
    );

  useEffect(() => {
    if (!projectInOtherLanguage) return;
    const currentLocale = sessionStorage.getItem('singleProjectLocale');
    if (currentLocale !== paramsLocale && currentLocale !== undefined) {
      sessionStorage.setItem('singleProjectLocale', paramsLocale);
      redirect({
        href: `/project/${projectInOtherLanguage.id}`,
        locale: paramsLocale,
      });
    }
  }, [projectInOtherLanguage, paramsLocale]);

  if (!projectById) {
    return (
      <div className="mt-20 text-xl">
        The project you are trying to access was not found.
      </div>
    );
  }

  const checkProfessionTypeForTranslate = () => {
    if (paramsLocale === 'en') {
      return projectById.acf.profession_type.name;
    }
    if (paramsLocale === 'de') {
      if (projectById.acf.profession_type.name === 'Dance') {
        return 'Tanz';
      }
      if (projectById.acf.profession_type.name === 'Art Mediation') {
        return 'Kunstvermittlung';
      }
      if (projectById.acf.profession_type.name === 'Music') {
        return 'Musik';
      } else {
        return projectById.acf.profession_type.name;
      }
    } else {
      return projectById.acf.profession_type.name;
    }
  };

  return (
    <div key={projectById.slug}>
      <ProjectsCard
        //professionsType={projectById.acf.profession_type.name}
        professionsType={checkProfessionTypeForTranslate()}
        title={projectById.acf.title}
        publishedOnAndBy={projectById.acf.published_on_and_by}
        imageUrl={projectById.acf.image}
        article={projectById.acf.article}
        locale={paramsLocale}
        externalReferenceLink={projectById.acf.external_reference_link}
        externalReferenceLink2={projectById.acf.external_reference_link_2}
      />
    </div>
  );
};

export default Projects;
