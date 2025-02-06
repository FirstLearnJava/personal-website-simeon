import { redirect } from '@/i18n/routing';

import { getLocale } from 'next-intl/server';

export const ProjectsPage = async () => {
  const locale = await getLocale();
  redirect({ href: '/projects/all', locale: locale });
};

export default ProjectsPage;
