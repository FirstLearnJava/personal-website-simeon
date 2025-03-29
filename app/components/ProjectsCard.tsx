import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface ProjectsCard {
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
  externalReferenceLink: string | undefined;
  externalReferenceLink2: string | undefined;
}

const ProjectsCard = ({
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
  externalReferenceLink,
  externalReferenceLink2,
}: ProjectsCard) => {
  return (
    <div className="pb-6 xxl:pb-5 sm:pb-4 flex flex-col items-center justify-center max-w-[700px] lg:max-w-[660px] md:max-w-full md:px-10 mt-12 xxl:mt-9 lg:mt-12 md:mt-10 sm:mt-8">
      <h2 className="border-b-[1px] border-blue-900 text-center px-2 sm:w-full mb-3 pb-[2px] sm:mb-1 uppercase font-mont tracking-wider text-sm sm:text-[0.8125rem]">
        {professionsType}
      </h2>
      <h2 className="text-center mb-[2px] xxl:mb-0 text-2xl xxl:text-xl sm:text-lg lg:mt-1 sm:mt-[6px]">
        {title}
      </h2>
      <p className="text-center font-mont text-sm xxl:text-[0.8125rem] sm:text-xs mb-3 sm:mb-2">
        {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
        {publishedOnAndBy}
      </p>
      <div className="flex justify-center">
        <Image
          alt={`project image ${title}`}
          src={imageUrl}
          width={600}
          height={600}
          className="rounded-[4px] max-w-[600px] max-h-[600px] xxl:max-h-[500px] xxl:max-w-[500px] sm:max-h-full sm:max-w-full lg:max-w-[h-600px] lg:max-h-[600px] object-contain"
          priority={true}
        />
      </div>
      <p className="font-mont text-base xxl:text-sm mt-3 mb-3 sm:mb-2 xxl:mb-2 leading-6 sm:leading-[22px] ">
        {article}
      </p>
      {externalReferenceLink && !externalReferenceLink2 && (
        <p className="w-full mt-1 xxl:mt-0 lg:mt-1 mb-7 xxl:mb-3 sm:mb-4 hover:underline text-base xxl:text-sm">
          <Link
            href={externalReferenceLink}
            target="_blank"
            className="hover:underline"
          >
            {externalReferenceLink}
          </Link>
        </p>
      )}
      {externalReferenceLink && externalReferenceLink2 && (
        <p className="w-full mt-1 xxl:mt-0 lg:mt-1 sm:mt-2 hover:underline text-base xxl:text-sm">
          <Link
            href={externalReferenceLink}
            target="_blank"
            className="hover:underline"
          >
            {externalReferenceLink}
          </Link>
        </p>
      )}
      {externalReferenceLink2 && externalReferenceLink && (
        <p className="w-full sm:mt-2 pb-7 xxl:pb-3 sm:pb-4 hover:underline text-base xxl:text-sm">
          <Link
            href={externalReferenceLink2}
            target="_blank"
            className="hover:underline"
          >
            {externalReferenceLink2}
          </Link>
        </p>
      )}
    </div>
  );
};

export default ProjectsCard;
