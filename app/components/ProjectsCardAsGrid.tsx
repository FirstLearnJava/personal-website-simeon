'use client';
import { Link } from '@/i18n/routing';
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
}: ProjectsCard) => {
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
        className={`border-[#dddddd] border flex flex-col items-center justify-start  bg-white  rounded-[6px] px-7 pt-5 pb-10 relative w-[36vw] h-full `}
      >
        <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[6px] uppercase font-mont tracking-wider w-full">
          {professionsType}
        </h2>
        <h2 className="text-center mb-[2px] text-xl ">{title}</h2>
        <p className="text-center font-mont text-xs mb-4 ">
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
          className={`font-mont text-sm ${checkCopyright() ? '-mt-[0px]' : 'mt-[17px]'}  line-clamp-5`}
        >
          {article}
        </p>
        <div className="relative w-full">
          {isLandscapeOverflowed && (
            <Link
              href={`/project/${id}`}
              className="bg-white font-medium inline absolute  left-0 hover:font-semibold"
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
      <div className="border-[#ececec] border flex flex-col w-[36vw] bg-white rounded-[6px] pt-5 px-7 h-full">
        <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[6px] uppercase font-mont tracking-wider">
          {professionsType}
        </h2>

        <h2 className="text-xl text-center mb-[2px]">{title}</h2>
        <p className=" font-mont text-xs mb-4 text-center">
          {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
          {publishedOnAndBy}
        </p>
        <div className="flex justify-center gap-[22px] mb-8 h-full">
          <div className="mt-1 flex-grow">
            <div className={`max-h-[500px]`}>
              <p
                className="font-mont text-sm  mb-2 line-clamp-[18]"
                ref={textRefLandscape}
              >
                {article}
              </p>
            </div>

            {isLandscapeOverflowed && (
              <Link
                href={`/project/${id}`}
                className="bg-white inline font-medium hover:font-semibold"
              >
                weiterlesen...
              </Link>
            )}
          </div>
          <Link
            href={`/project/${id}`}
            className="max-h-[600px] flex-shrink-0 w-[56%]"
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
              <p className=" text-xs text-left hover:cursor-default ml-[2px] mt-[1px] ">
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
