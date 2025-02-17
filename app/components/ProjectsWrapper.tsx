import Projects from './Projects';

const reqURL: string | undefined = process.env.CMS_API_URL;

export default async function ProjectsWrapper({
  category,
}: {
  category?: string;
}) {
  if (reqURL) {
    const req = await fetch(reqURL, {
      cache: 'force-cache',
      next: { revalidate: 600 },
    });
    if (!req.ok) {
      req.status;
    }
    const data = await req.json();
    return <Projects data={data} category={category} />;
  }
}
