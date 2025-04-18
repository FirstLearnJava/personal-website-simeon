'use client';
import { Link, usePathname } from '@/i18n/routing';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

export interface ProjectsCard {
  id: number;
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
  aspectRatio: string;
  copyrightImage: string | undefined;
  isJustOneProject: boolean;
}

const ProjectsCardAsGrid = ({
  id,
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
  aspectRatio,
  copyrightImage,
  isJustOneProject,
}: ProjectsCard) => {
  const isOnProjectsPath = usePathname().includes('projects');
  const [isLandscapeOverflowed, setIsLandscapeOverflowed] = useState(false);
  const textRefLandscape = useRef<HTMLParagraphElement>(null);
  const checkCopyright = () => {
    if (copyrightImage == undefined || copyrightImage === '') {
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    const element = textRefLandscape.current;
    const calcOverflow = () => {
      if (element) {
        const isOverflowing = element.scrollHeight > element.clientHeight;
        setIsLandscapeOverflowed(isOverflowing);
      }
    };
    calcOverflow();
    window.addEventListener('resize', calcOverflow);

    return () => window.removeEventListener('resize', calcOverflow);
  }, [article]);

  if (aspectRatio === 'landscape-format') {
    return (
      <div
        className={`border-y-[#cbcbcb] border-x-[#cccccc] border flex flex-col items-center justify-start  bg-white  rounded-[6px] px-[30px] sm:px-[1.25rem] xs:px-[1rem] pt-5 pb-10 relative w-[35vw] ${isJustOneProject ? ' xxl:!w-[42vw] xl:!w-[48vw]' : ''} ${isOnProjectsPath ? 'xxl:w-[36vw] xl:w-[34vw] lg:!w-[60vw] md:!w-[60vw] sm:!w-[82vw] xs:!w-full' : 'xxl:w-[38vw] xl:w-[40vw] lg:!w-[60vw] md:!w-[66vw] sm:!w-[82vw] xs:!w-full'} h-full`}
      >
        <h2 className="border-b-[1px] border-[#333] text-center text-xs xl:text-[0.6875rem] lg:text-xs mb-3 pb-[6px] uppercase font-mont tracking-wider w-full mt-1">
          {professionsType}
        </h2>
        <h2 className="text-center text-xl xl:tracking-tight lg:tracking-normal xl:text-lg xl:leading-5 lg:text-xl mt-1 xs:mb-2 xs:mt-0">
          {title}
        </h2>
        <p className="xs:hidden text-center font-mont text-xs xl:text-[0.6875rem] lg:text-xs xl:tracking-tight lg:tracking-normal mb-4 ">
          {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
          {publishedOnAndBy}
        </p>

        <Link href={`/project/${id}`} className="max-h-[600px] max-w-[600px]">
          <Image
            alt={`project image about ${title}`}
            src={imageUrl}
            width={600}
            height={600}
            className="rounded-[4px] object-contain transition-opacity duration-200 ease-in-out hover:opacity-[0.90]"
            priority={true}
          />
          {checkCopyright() && (
            <p className=" text-xs hover:cursor-default ml-[4px] mt-[1px] ">
              &copy; {copyrightImage}
            </p>
          )}
        </Link>

        <p
          ref={textRefLandscape}
          className={`font-mont text-sm ${checkCopyright() ? '-mt-[0.125rem]' : 'mt-[0.9375rem]'} tracking-wide line-clamp-5 xl:line-clamp-4  xl:text-sm md:text-[0.8125rem] md:leading-[22px]`}
        >
          {article}
        </p>
        <div className="relative w-full">
          {isLandscapeOverflowed && (
            <Link
              href={`/project/${id}`}
              className="bg-white font-medium inline absolute left-0 hover:font-semibold lg:text-base md:text-[0.9375rem] -mt-[0.125rem]"
            >
              weiterlesen...
            </Link>
          )}
        </div>
      </div>
    );
  }
  if (aspectRatio === 'portrait-format') {
    return (
      <div
        className={`border-y-[#cbcbcb] border-x-[#cccccc] border flex flex-col w-[35vw] ${isJustOneProject ? ' xxl:!w-[42vw] xl:!w-[48vw]' : ''} ${isOnProjectsPath ? 'xxl:w-[36vw] xl:w-[34vw] lg:!w-[60vw] md:!w-[60vw] sm:!w-[80vw] xs:!w-[82vw]' : 'xxl:w-[38vw] xl:w-[40vw] lg:w-[60vw] md:!w-[66vw] sm:!w-[80vw] xs:!w-[82vw]'} lg:h-[100%] bg-white rounded-[6px] pt-5 px-[30px] sm:px-[1.25rem] xs:px-[1rem] h-full`}
      >
        <h2 className="border-b-[1px] border-[#333] text-center text-xs xl:text-[0.6875rem] lg:text-xs mb-3 pb-[6px] uppercase font-mont tracking-wider mt-1   ">
          {professionsType}
        </h2>

        <h2 className="text-xl xl:text-lg lg:text-xl xl:tracking-tight lg:tracking-normal text-center mt-1 xs:mt-0 xs:mb-2">
          {title}
        </h2>
        <p className="xs:hidden font-mont text-xs xl:text-[0.6875rem] lg:text-xs xl:tracking-tight lg:tracking-normal mb-4 sm:mb-5 text-center">
          {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
          {publishedOnAndBy}
        </p>
        <div className="flex xs:flex-col-reverse justify-center xs:items-center gap-[22px] xs:gap-1 mb-8 h-full">
          <div className="mt-1 sm:mt-0 flex-grow">
            <div className={`max-h-[500px]`}>
              <p
                className="font-mont mt-[0.125rem] xs:mt-0 xxl:mt-0 text-sm xl:text-sm md:text-[0.8125rem] md:leading-[22px] line-clamp-[20] xxl:line-clamp-[17] xl:line-clamp-[14] lg:line-clamp-[20] md:line-clamp-[16] sm:line-clamp-[17] xs:line-clamp-4 tracking-wide "
                ref={textRefLandscape}
              >
                {article}
              </p>
            </div>

            {isLandscapeOverflowed && (
              <Link
                href={`/project/${id}`}
                className="bg-white inline font-medium absolute hover:font-semibold lg:text-base md:text-[0.9375rem] -mt-[0.125rem]"
              >
                weiterlesen...
              </Link>
            )}
          </div>
          <Link
            href={`/project/${id}`}
            className="max-h-[600px] flex-shrink-0 w-[56%] xs:w-[88%]"
          >
            <Image
              alt={`project image about ${title}`}
              src={imageUrl}
              width={600}
              height={600}
              className="rounded-[4px] object-contain transition-opacity duration-200 ease-in-out hover:opacity-[0.90]"
              priority={true}
            />

            {checkCopyright() && (
              <p className="text-xs text-left hover:cursor-default ml-[2px] mt-[1px]">
                &copy; {copyrightImage}
              </p>
            )}
          </Link>
        </div>
      </div>
    );
  }
};

export default ProjectsCardAsGrid;
