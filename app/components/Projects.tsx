import React from 'react';
import ProjectsCard from './ProjectsCard';
import { getLocale } from 'next-intl/server';
const reqURL: string | undefined = process.env.CMS_API_URL;

interface Project {
  id: number;
  slug: string;
  acf: {
    profession_type: {
      name: string;
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

const Projects = async () => {
  if (reqURL) {
    const req = await fetch(reqURL);
    const projects: Project[] = await req.json();

    const locale = await getLocale();
    console.log(locale);

    return (
      <div>
        {projects
          .filter((project) => project.acf.language.slug === locale)
          .map((project) => (
            <div key={project.slug}>
              <ProjectsCard
                professionsType={project.acf.profession_type.name}
                title={project.acf.title}
                publishedOnAndBy={project.acf.published_on_and_by}
                imageUrl={project.acf.image}
                article={project.acf.article}
                locale={locale}
              />
            </div>
          ))}
      </div>
    );
  }
};

export default Projects;
