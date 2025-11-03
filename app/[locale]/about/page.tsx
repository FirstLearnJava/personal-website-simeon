import { Metadata } from 'next';
import ClientPage from './ClientPage';

export const metadata: Metadata = {
  title: 'About',
};

export default function AboutPage() {
  return <ClientPage />;
}
