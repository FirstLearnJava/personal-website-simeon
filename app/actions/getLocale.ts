import { getLocale } from 'next-intl/server';

export const getLocaleValue = async () => {
  const locale = await getLocale();
  return locale;
};
