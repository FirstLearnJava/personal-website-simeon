import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

export interface ProjectsCard {
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
  aspectRatio: string;
}

const ProjectsCardAsGrid = ({
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
  aspectRatio,
}: ProjectsCard) => {
  const [isLandscapeOverflowed, setIsLandscapeOverflowed] = useState(false);
  const textRefLandscape = useRef<HTMLParagraphElement>(null);

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
        className={`border-[#dddddd] border flex flex-col items-center justify-start  bg-white  rounded-[6px] px-7 pt-5 pb-10 relative w-[36vw] h-full`}
      >
        <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[6px] uppercase font-mont tracking-wider w-full">
          {professionsType}
        </h2>
        <h2 className="text-center mb-[2px] text-xl ">{title}</h2>
        <p className="text-center font-mont text-xs mb-4 ">
          {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
          {publishedOnAndBy}
        </p>
        <div className="">
          <Image
            alt={title}
            src={imageUrl}
            width={600}
            height={600}
            className="rounded-[4px] object-contain"
            priority={true}
          />
        </div>
        <p
          ref={textRefLandscape}
          className="font-mont text-sm mt-3 line-clamp-4"
        >
          {article}
        </p>
        <div className="relative w-full">
          {isLandscapeOverflowed && (
            <Link
              href="/project/1"
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
          {locale === 'en' ? 'Published on ' : 'Veröffentlicht am '}
          {publishedOnAndBy}
        </p>
        <div className="flex justify-center gap-[22px] mb-8 h-full">
          <div className="mt-1">
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
                href="/project/1"
                className="bg-white inline font-medium  hover:font-semibold"
              >
                weiterlesen...
              </Link>
            )}
          </div>

          <Image
            alt={title}
            src={imageUrl}
            width={600}
            height={600}
            className="rounded-[6px] max-h-[600px] object-contain w-[56%]"
            priority={true}
          />
        </div>
      </div>
    );
  }
};

export default ProjectsCardAsGrid;
