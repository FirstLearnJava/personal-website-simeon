import fetchWordpressData from '../actions/fetchWordpressData';
import ProjectsAsGrid from './ProjectsAsGrid';

export default async function ProjectsWrapper({
  category,
}: {
  category?: string;
}) {
  const data = await fetchWordpressData();
  return <ProjectsAsGrid data={data} category={category} />;
}
