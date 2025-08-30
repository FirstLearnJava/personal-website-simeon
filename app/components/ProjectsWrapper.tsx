import fetchWordpressData from '../actions/fetchWordpressData';
import ProjectsAsGrid from './ProjectsAsGrid';

export default async function ProjectsWrapper({
  category,
  locale,
}: {
  category: string;
  locale: string;
}) {
  const data = await fetchWordpressData();
  return <ProjectsAsGrid data={data} category={category} locale={locale} />;
}
