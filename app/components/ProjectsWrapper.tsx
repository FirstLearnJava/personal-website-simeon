import fetchWordpressData from '../actions/fetchWordpressData';
import Projects from './Projects';

export default async function ProjectsWrapper({
  category,
}: {
  category?: string;
}) {
  const data = await fetchWordpressData();
  return <Projects data={data} category={category} />;
}
