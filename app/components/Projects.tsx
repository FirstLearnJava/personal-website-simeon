import React from 'react';
import ProjectsCard from './ProjectsCard';
import { getLocale } from 'next-intl/server';
import https from 'https';
import fetchWordpressData from '../actions/fetchWordpressData';
const reqURL: string | undefined = process.env.CMS_API_URL;

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

const agent = new https.Agent({
  rejectUnauthorized: false,
});

const Projects = async ({ category }: { category?: string }) => {
  console.log(category);
  if (reqURL) {
    const req = await fetch(reqURL, {
      headers: {
        Cookie: '__test=5f7651e5b4ea4b705b8629c5f60f071c',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
      },
      cache: 'no-store', // Prevents caching issues (optional)
    });

    const projects: Project[] = await req.json();
    //const projects: Project[] = await fetchWordpressData(reqURL);
    const locale = await getLocale();

    return (
      <div>
        {projects
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
          })}
      </div>
    );
  }
};

export default Projects;
