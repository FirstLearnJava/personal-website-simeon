import { redirect } from '@/i18n/routing';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'My Projects',
};

export const ProjectsPage = async () => {
  const locale = await getLocale();
  redirect({ href: '/projects/all', locale: locale });
};

export default ProjectsPage;
