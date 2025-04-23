import Image from 'next/image';
import homepageCover from '../../public/homepage/coverImage.webp';
import homepageCoverMobileSm from '../../public/homepage/homepageCoverMobileSm.webp';
import homepageCoverMobileXs from '../../public/homepage/homepageCoverMobileXs.webp';
import { Metadata } from 'next';
import ProjectsWrapper from '../components/ProjectsWrapper';
import { getTranslations } from 'next-intl/server';
import AnimatedText from '../components/AnimatedText';

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
  console.log(
    'Website developed by Matthias Floimayr. Feel free to contact me, at matthiasfloimayr@gmail.com',
  );

  return (
    <div className="flex flex-col bg-projectBackground">
      <div className="w-full h-[100vh] sm:hidden ">
        <div className="absolute top-[62px] left-0 w-full h-[calc(100vh-62px)] z-10">
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
        <div className="absolute z-40 top-[20%]  xxl:top-[23%] xl:top-[28%] lg:top-[31.6%] md:top-[31.5%] left-[64%] xl:left-[61%] lg:left-[53%] md:left-[53%] text-white sm:w-[220px] overflow-hidden">
          <h1 className=" text-[50px] xxl:text-[44px] xl:text-[42px] lg:text-[40px] md:text-[36px] sm:text-[30px] leading-9">
            <AnimatedText>Simeon Ohlsen</AnimatedText>
          </h1>

          <p className=" font-mont ml-10 md:ml-4 lg:leading-5 text-[22px] xxl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] text-white font-medium">
            <AnimatedText>{translation('professionalSkills')}</AnimatedText>
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center w-full minsm:hidden mt-[62px] mb-[30px]">
        <div className=" absolute top-[374px] xs:top-[296px] z-10 text-white">
          <h1 className="text-[50px] xs:text-[42px] leading-9 text-center">
            <AnimatedText>Simeon Ohlsen</AnimatedText>
          </h1>
        </div>
        <Image
          alt="Simeon dancing in the nature"
          src={homepageCoverMobileSm}
          className="object-cover contrast-[1.05] rounded-sm xs:hidden" // cover contain
          width={640}
          height={853}
          /* ADAPT BEFORE Finalising project for best performance
          sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 30vw" */
          //fill
          //sizes="100vw"
          quality={100}
          placeholder="blur"
          priority
        />
        <Image
          alt="Simeon dancing in the nature"
          src={homepageCoverMobileXs}
          className="object-cover contrast-[1.05] rounded-sm minxs:hidden" // cover contain
          width={640}
          height={853}
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
        {/*  <h2 className="font-lora text-3xl mt-8"> My Projects</h2> */}
        {/* <div className="bg-gradient-to-b from-[rgb(230,235,240)] w-full to-[rgb(241,245,248)] h-32"></div>
        Example when transition point is not 50% bg-[linear-gradient(180deg,rgb(224,231,236)_32%,rgb(241,245,248)_100%)]
        How to make a linear gradient with tailwind --> Use https://cssgradient.io/
        */}
        <div
          className={`flex-col flex items-center w-full  pt-32 xxl:pt-24 xl:pt-20 lg:pt-16 md:pt-14 sm:pt-11 xs:pt-9 pb-16`}
        >
          {/* <h2 className="font-lora text-4xl mb-12 text-white">Projects</h2> */}
          {/* original brighter bg-color: /* F9FAFF & #f7fdf5 */}
          <ProjectsWrapper locale={paramsLocale} />
        </div>
      </div>
    </div>
  );
}
