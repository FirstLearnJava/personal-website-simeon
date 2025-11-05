import { MetadataRoute } from 'next';

const reqURL: string | undefined = process.env.CMS_API_URL;

export interface Project {
  title: { rendered: string };
  id: number;
  slug: string;
  acf: {
    profession_type: {
      name: string;
      slug: string;
    };
    title: string;
    aspect_ratio: { slug: string };
    published_on_and_by: string;
    image: string;
    article: string;
    language: {
      slug: string;
    };
    copyright_image?: string;
    external_reference_link?: string;
    external_reference_link_2?: string;
  };
}

async function fetchWordpressData() {
  let allData: Project[] = [];
  let page = 1;

  if (!reqURL) {
    return [];
  }

  while (true) {
    try {
      const req = await fetch(`${reqURL}&per_page=100&page=${page}`, {
        cache: 'force-cache',
        next: { revalidate: 600 },
      });

      if (!req.ok) {
        return [];
      }

      const data = await req.json();

      allData.push(...data);
      if (data.length < 100) {
        break;
      }

      page++;
    } catch (error) {
      return [];
    }
  }
  // Projects, which have Unused in the title are filtered out
  const filteredData = allData.filter(
    (allDataObject) => allDataObject.title.rendered !== 'Unused',
  );
  return filteredData;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await fetchWordpressData();

  const projects = data.map((project) => ({
    url: `${process.env.NEXT_BASE_URL}/${project.acf.language.slug}/project/${project.id}`,
    priority: 0.7,
  }));
  return [
    {
      url: `${process.env.NEXT_BASE_URL}/en`,
      alternates: {
        languages: {
          de: `${process.env.NEXT_BASE_URL}/de`,
        },
      },
      priority: 1,
    },
    {
      url: `${process.env.NEXT_BASE_URL}/en/about`,
      alternates: {
        languages: {
          de: `${process.env.NEXT_BASE_URL}/de/about`,
        },
      },
      priority: 0.8,
    },
    ...projects,
    {
      url: `${process.env.NEXT_BASE_URL}/en/newsletter`,
      alternates: {
        languages: {
          de: `${process.env.NEXT_BASE_URL}/de/newsletter`,
        },
      },
      priority: 0.6,
    },
    {
      url: `${process.env.NEXT_BASE_URL}/en/contact`,
      alternates: {
        languages: {
          de: `${process.env.NEXT_BASE_URL}/de/contact`,
        },
      },
      priority: 0.5,
    },
  ];
}
