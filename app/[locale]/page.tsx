import { useTranslations } from 'next-intl';
import Image from 'next/image';
//import homepageCover from '../../public/homepage/DancePerformanceMuk.jpg';
import homepageCover from '../../public/homepage/coverImage1.jpg';
import { Metadata } from 'next';
import ProjectsWrapper from '../components/ProjectsWrapper';

export const metadata: Metadata = {
  title: 'Simeon Ohlsen | Personal Page',
  description: `Simeon Ohlsen's Homepage `,
};

export default function HomePage() {
  // Determine translation based on locale, fallback to "en" if invalid
  const translation = useTranslations('HomePage');

  return (
    <div className="flex flex-col">
      <div className="w-full h-[100vh] ">
        <div className="absolute top-[61px] left-0 w-full h-[calc(100vh-61px)] -z-10">
          <Image
            alt="playing piano in rainbow-colored smoke"
            src={homepageCover}
            className="object-cover contrast-[1.05]" // cover contain
            /* width={1920}
          height={394} */
            /* ADAPT BEFORE Finalising project for best performance
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 30vw" */
            loading="eager"
            fill
            sizes="100vw"
            quality={100}
            placeholder="blur"
            priority
          />
        </div>

        <h1 className=" absolute text-[46px] top-[12.5%] left-[69%] text-white">
          Simeon Ohlsen
        </h1>

        <p className=" absolute font-mont text-[20px]  mt-1 top-[20%] left-[71%] text-white font-medium">
          {translation('professionalSkills')}
        </p>
      </div>

      <div className="z-20 w-full flex items-center flex-col">
        <div
          className={`flex-col flex items-center w-full bg-projectBackground pt-32 pb-16`}
        >
          {/* <h2 className="font-lora text-4xl mb-12 text-white">Projects</h2> */}
          {/* original brighter bg-color: /* F9FAFF & #f7fdf5 */}
          <ProjectsWrapper />
        </div>
      </div>
    </div>
  );
}
