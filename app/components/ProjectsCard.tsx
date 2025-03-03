import Image from 'next/image';
import React from 'react';

export interface ProjectsCard {
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
}

const ProjectsCard = ({
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
}: ProjectsCard) => {
  return (
    <div className="pb-6 flex flex-col items-center justify-center max-w-[600px] mt-12">
      <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[2px] uppercase font-mont tracking-wider">
        {professionsType}
      </h2>
      <h2 className="text-center mb-[2px] text-xl">{title}</h2>
      <p className="text-center font-mont text-xs mb-3">
        {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
        {publishedOnAndBy}
      </p>
      <div className="flex justify-center">
        <Image
          alt={title}
          src={imageUrl}
          width={600}
          height={600}
          className="rounded-[4px] max-w-[h-600px] max-h-[600px] object-contain"
          priority={true}
        />
      </div>
      <p className="font-mont text-sm mt-4 mb-3">{article}</p>
    </div>
  );
};

export default ProjectsCard;
