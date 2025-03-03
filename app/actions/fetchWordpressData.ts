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
  };
}

export default async function fetchWordpressData() {
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
