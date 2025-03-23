import Image from 'next/image';
import homepageCover from '../../public/homepage/coverImage.webp';
import homepageCoverMobile from '../../public/homepage/homepageCoverMobile.webp';
import { Metadata } from 'next';
import ProjectsWrapper from '../components/ProjectsWrapper';
import { getTranslations } from 'next-intl/server';

export const metadata: Metadata = {
  title: 'Simeon Ohlsen | Personal Page',
  description: `Simeon Ohlsen's Homepage `,
};

type Params = Promise<{ id: string; locale: string }>;

export default async function HomePage({ params }: { params: Params }) {
  // Determine translation based on locale, fallback to "en" if invalid
  //const translation = useTranslations('HomePage');
  const translation = await getTranslations('HomePage');
  const awaitedParams = await params;
  const paramsLocale = awaitedParams.locale;

  return (
    <div className="flex flex-col minxs:bg-projectBackground bg-[#f9f8f8]">
      <div className="w-full h-[100vh] xs:hidden ">
        <div className="absolute top-[61px] left-0 w-full h-[calc(100vh-61px)] z-10">
          <Image
            alt="Simeon dancing in the nature"
            src={homepageCover}
            className="object-cover contrast-[1.05]"
            fill
            sizes="100vw"
            quality={100}
            placeholder="blur"
            priority
          />
        </div>
        <div className="absolute z-40 top-[20%]  xxl:top-[23%] xl:top-[28%] lg:top-[30%] left-[64%] xl:left-[61%] lg:left-[56%] sm:left-[53%] text-white sm:w-[220px] overflow-hidden">
          <h1 className=" text-[50px] xxl:text-[44px] xl:text-[40px] lg:text-[36px] md:text-[34px] sm:text-[30px] leading-9">
            Simeon Ohlsen
          </h1>

          <p className=" font-mont ml-10 md:ml-0 md:text-center text-[22px] xxl:text-[20px] xl:text-[18px] lg:text-[16px] text-white font-medium">
            {translation('professionalSkills')}
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full minxs:hidden mt-[130px] mb-[30px]">
        <div className=" absolute top-[310px] z-10 text-white">
          <h1 className="text-[40px] leading-9 text-center">Simeon Ohlsen</h1>
        </div>
        <Image
          alt="Simeon dancing in the nature"
          src={homepageCoverMobile}
          className="object-cover contrast-[1.05] rounded-sm" // cover contain
          width={330}
          height={440}
          /* ADAPT BEFORE Finalising project for best performance
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 30vw" */
          //fill
          //sizes="100vw"
          quality={100}
          placeholder="blur"
          priority
        />
      </div>

      <div className="z-20 w-full flex items-center flex-col">
        {/* <div className="bg-gradient-to-b from-[rgb(230,235,240)] w-full to-[rgb(241,245,248)] h-32"></div>
        Example when transition point is not 50% bg-[linear-gradient(180deg,rgb(224,231,236)_32%,rgb(241,245,248)_100%)]
        How to make a linear gradient with tailwind --> Use https://cssgradient.io/
        */}
        <div
          className={`flex-col flex items-center w-full  pt-32 xxl:pt-24 xl:pt-16 pb-16`}
        >
          {/* <h2 className="font-lora text-4xl mb-12 text-white">Projects</h2> */}
          {/* original brighter bg-color: /* F9FAFF & #f7fdf5 */}
          <ProjectsWrapper locale={paramsLocale} />
        </div>
      </div>
    </div>
  );
}
