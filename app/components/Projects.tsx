'use client';

import React, { useEffect, useState } from 'react';
import ProjectsCard from './ProjectsCard';
import https from 'https';
import { Cookies } from 'react-cookie';
//const reqURL: string | undefined = process.env.NEXT_PUBLIC_CMS_API_URL;

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
// got rid of async for client side testing
const Projects = ({ category, data }: { category?: string; data: [] }) => {
  //const [projects, setProjects] = useState<Project[] | undefined>(undefined);
  const projects: Project[] = data;
  const [locale, setLocale] = useState<string | undefined>(undefined);

  useEffect(() => {
    console.log('useEffect running');
    /* async function loadData() {
      console.log('reqURL:', reqURL);
      if (reqURL) {
        try {
          const req = await fetch(reqURL, {
            headers: {
              'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36',
            },
            cache: 'force-cache',
            next: { revalidate: 600 },
          });

          if (!req.ok) {
            throw new Error('Network response was not ok');
          }

          const data: Project[] = await req.json();
          console.log('Fetched data:', data); // Log the data to see what is returned
          setProjects(data);
        } catch (error) {
          console.error('Failed to fetch data:', error);
        }
      }
    }
    loadData(); */
  }, []);
  useEffect(() => {
    const cookies = new Cookies();
    const localeFromCookie = cookies.get('NEXT_LOCALE');
    setLocale(localeFromCookie);
  }, []);
  // hardcoded for tests

  // const locale = await getLocale(); -->correct value
  return (
    <div>
      {!projects ? (
        <div></div>
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
