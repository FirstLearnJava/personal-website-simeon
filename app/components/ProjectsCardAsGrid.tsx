import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { useState, useRef, useEffect } from 'react';

export interface ProjectsCard {
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
}

const ProjectsCardAsGrid = ({
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
}: ProjectsCard) => {
  const [isOverflowed, setIsOverFlowed] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight);
      const maxHeight = lineHeight * 4;
      setIsOverFlowed(element.offsetHeight > maxHeight);
    }
  }, [article]);

  return (
    <div className=" border-gray-300  flex flex-col items-center justify-start max-w-[600px]  bg-white rounded-[10px] p-9 relative">
      <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[2px] uppercase font-mont tracking-wider">
        {professionsType}
      </h2>
      <h2 className="text-center mb-[2px] text-xl max-w-[30vw]">{title}</h2>
      <p className="text-center font-mont text-xs mb-3 max-w-[30vw]">
        {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
        {publishedOnAndBy}
      </p>
      <div className="flex justify-center">
        <Image
          alt={title}
          src={imageUrl}
          width={600}
          height={600}
          className="rounded-sm max-w-[30vw] max-h-[600px] object-contain"
          priority={true}
        />
      </div>
      <div className="">
        <p
          className="font-mont text-sm mt-4 mb-3 max-w-[30vw] line-clamp-4"
          ref={textRef}
        >
          {article}
          {isOverflowed && (
            <Link
              href="/projects"
              className="bg-white font-medium inline absolute bottom-[16px] left-9 hover:font-semibold"
            >
              weiterlesen...
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProjectsCardAsGrid;
/* import { Link } from '@/i18n/routing';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';

export interface ProjectsCard {
  professionsType: string;
  title: string;
  publishedOnAndBy: string;
  imageUrl: string;
  article: string;
  locale: string | undefined;
}

const ProjectsCardAsGrid = ({
  professionsType,
  title,
  publishedOnAndBy,
  imageUrl,
  article,
  locale,
}: ProjectsCard) => {
  const [isOverflowed, setIsOverFlowed] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const computedStyle = window.getComputedStyle(element);
      const lineHeight = parseFloat(computedStyle.lineHeight); // Get dynamic line-height
      const maxHeight = lineHeight * 4; // Set maxHeight based on lineHeight and maxLines

      // Log for debugging
      console.log('scrollHeight:', element.scrollHeight);
      console.log('clientHeight:', element.clientHeight);
      console.log('offsetHeight:', element.offsetHeight);
      console.log('Calculated maxHeight:', maxHeight);

      // Check if the element is overflowing
      const isOverflowing = element.scrollHeight > element.clientHeight;
      setIsOverFlowed(isOverflowing);
    }
  }, [article]); // Runs whenever the article changes

  return (
    <div className="border-gray-300 flex flex-col items-center justify-start max-w-[600px] bg-white rounded-[10px] p-9 relative">
      <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[2px] uppercase font-mont tracking-wider">
        {professionsType}
      </h2>
      <h2 className="text-center mb-[2px] text-xl max-w-[30vw]">{title}</h2>
      <p className="text-center font-mont text-xs mb-3 max-w-[30vw]">
        {locale === 'en' ? 'Published on: ' : 'Veröffentlicht am: '}
        {publishedOnAndBy}
      </p>
      <div className="flex justify-center">
        <Image
          alt={title}
          src={imageUrl}
          width={600}
          height={600}
          className="rounded-sm max-w-[30vw] max-h-[600px] object-contain"
          priority={true}
        />
      </div>
      <div className="relative max-w-[30vw]">
        <p
          ref={textRef}
          className="font-mont text-sm mt-4 mb-3 line-clamp-4"
          // Ensure line-height is explicitly set
        >
          {article}
        </p>

        {isOverflowed && (
          <Link
            href="/projects"
            className="bg-white font-medium inline absolute bottom-[-20px] left-0 hover:font-semibold"
          >
            weiterlesen...
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectsCardAsGrid; */
