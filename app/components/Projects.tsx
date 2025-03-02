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
  const projects = data;
  const projectById = data.find((project) => project.id == paramsId);
  console.log(projectById);

  return (
    <div>
      {!projects ? (
        <div>There is an issue with the project.</div>
      ) : (
        projects
          .filter((project) => project.acf.language.slug === paramsLocale)

          .map((project) => {
            const checkProfessionTypeForTranslate = () => {
              if (paramsLocale === 'en') {
                return project.acf.profession_type.name;
              }
              if (paramsLocale === 'de') {
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
                  locale={paramsLocale}
                />
              </div>
            );
          })
      )}
    </div>
  );
};

export default Projects;
