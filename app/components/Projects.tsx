import React from 'react';
import ProjectsCard from './ProjectsCard';
import { Project } from '../actions/fetchWordpressData';

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

  if (!projectById) {
    return <div>The project you are trying to access was not found.</div>;
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
      />
    </div>
  );
};

export default Projects;
