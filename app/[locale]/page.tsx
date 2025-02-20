import { useTranslations } from 'next-intl';
import Image from 'next/image';
import homepageCover from '../../public/homepage/DancePerformanceMuk.jpg';
import { Metadata } from 'next';
import ProjectsWrapper from '../components/ProjectsWrapper';
// import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'Simeon Ohlsen | Personal Page',
  description: `Simeon Ohlsen's Homepage `,
};

export default function HomePage() {
  // Determine translation based on locale, fallback to "en" if invalid
  const translation = useTranslations('HomePage');

  return (
    <>
      <div className="w-full flex items-center flex-col">
        <h1 className="text-[32px]">Simeon Ohlsen</h1>

        <p className="font-mont text-sm text-[#696969] mt-1">
          {translation('professionalSkills')}
        </p>

        <Image
          alt="playing piano in rainbow-colored smoke"
          src={homepageCover}
          className="mt-10 rounded-sm mb-2"
          width={900}
          height={394}
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 30vw"
        />
        <ProjectsWrapper />
      </div>
    </>
  );
}
