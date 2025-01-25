'use client';

import { useTranslations } from 'next-intl';
import Head from 'next/head';
import Image from 'next/image';
import homepageCover from '../../public/homepage/DancePerformanceMuk.jpg';
import ProjectsCard from '../components/ProjectsCard';
import ProjectsCard2 from '../components/ProjectsCard2';
// import { Link } from '@/i18n/routing';

export default function HomePage() {
  // Determine translation based on locale, fallback to "en" if invalid
  const translation = useTranslations('HomePage');

  return (
    <>
      <Head>
        <title>Simeon Ohlsen | Personal Page</title>
        <meta name="description" content="homepage"></meta>
      </Head>
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[32px]">Simeon Ohlsen</h1>

        <p className="font-mont text-sm text-[#696969] mt-1">
          {translation('professionalSkills')}
        </p>

        <Image
          alt="playing piano in rainbow-colored smoke"
          src={homepageCover}
          className="mt-10 rounded-sm mb-2"
          /* style={{ width: '65%', height: 'auto' }} */
          width={900}
          height={394}
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 30vw"
        />
        <ProjectsCard />
        <ProjectsCard2 />
      </div>
    </>
  );
}
