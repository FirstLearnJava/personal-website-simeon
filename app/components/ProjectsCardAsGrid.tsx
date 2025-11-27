'use client';
import { Link, usePathname, useRouter } from '@/i18n/routing';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

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
  isOdd: boolean;
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
  isOdd,
}: ProjectsCard) => {
  const isOnProjectsPath = usePathname().includes('projects');
  const [isLandscapeOverflowed, setIsLandscapeOverflowed] = useState(false);
  //const [needsBlankSpaceAdjust, setNeedsBlankSpaceAdjust] = useState(false);
  //const [cardHeight, setCardHeight] = useState(0);
  const articleRef = useRef<HTMLParagraphElement>(null);
  //const imageAndArticleRef = useRef<HTMLDivElement>(null);
  const projectInViewRef = useRef<HTMLDivElement>(null);
  const isProjectInViewRef = useInView(projectInViewRef, { once: true });
  const checkCopyright = () => {
    if (copyrightImage == undefined || copyrightImage === '') {
      return false;
    } else {
      return true;
    }
  };
  const router = useRouter();
  useEffect(() => {
    const element = articleRef.current;
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

  /* useEffect(() => {
    const checkBlankSpace = () => {
      if (!imageAndArticleRef.current || !articleRef.current) return;
      const imageAndArticle = imageAndArticleRef.current;
      const article = articleRef.current;
      const cardHeight = imageAndArticle?.clientHeight;
      const articleHeight = article?.clientHeight;
      const blankSpace = cardHeight - articleHeight;
      setCardHeight(cardHeight);
      console.log('title', title);
      console.log('articleHeight:', articleHeight);
      console.log('cardHeight:', cardHeight);
      setNeedsBlankSpaceAdjust(blankSpace > 100);
      console.log('blankSpace', blankSpace);
    };
    const timer = setTimeout(checkBlankSpace, 100);
    return () => clearTimeout(timer);
  }, []);
 */

  if (aspectRatio === 'landscape-format') {
    return (
      <motion.div
        ref={projectInViewRef}
        initial={{
          x: 0,
          y: -60,
          scale: 0.75,
          opacity: 0,
          //variants = { animationVariants },
        }}
        animate={isProjectInViewRef ? { x: 0, opacity: 1, scale: 1, y: 0 } : {}}
        viewport={{ once: true }}
        transition={{
          duration: isOnProjectsPath ? 0.85 : 0.75,
          ease: 'easeOut',
        }}
        className={`border-y-[#cbcbcb] border-x-[#cccccc] hover:border-x-[#b0b0b0] hover:border-y-[#b0b0b0] border flex flex-col items-center justify-start  bg-white  rounded-[6px] px-7 sm:px-[1.25rem] xs:px-[1rem] pt-5 pb-6 xxxl:pb-5 lg:pb-7 xs:pb-6 relative w-[32vw] h-full ${isJustOneProject ? ' xxl:!w-[42vw] xl:!w-[48vw]' : ''} ${isOnProjectsPath ? 'xxxl:!w-[33vw] xl:!w-[32vw] lg:!w-[60vw] md:!w-[60vw] sm:!w-[82vw] xs:!w-full' : 'xxxl:w-[32vw] xxl:w-[38vw] xl:w-[40vw] lg:!w-[60vw] md:!w-[66vw] sm:!w-[82vw] xs:!w-full'}`}
      >
        <motion.div
          whileHover={{ scale: 0.97 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
        >
          <Link href={`/project/${id}`}>
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
            <div className="w-full">
              <div className="flex justify-center">
                <Image
                  alt={`project image about ${title}`}
                  src={imageUrl.trimEnd()}
                  width={600}
                  height={600}
                  className="rounded-[4px] object-contain transition-opacity duration-200 ease-in-out "
                  priority={true}
                />
              </div>
              {checkCopyright() && (
                <p className=" text-xs hover:cursor-default ml-[4px] mt-[1px]">
                  &copy; {copyrightImage}
                </p>
              )}
            </div>

            <p
              ref={articleRef}
              className={`font-mont text-sm ${checkCopyright() ? '-mt-[0.125rem]' : 'mt-[0.9375rem]'} tracking-[0.0125rem] xs:line-clamp-4 line-clamp-5 xl:line-clamp-4 lg:line-clamp-5 ' ${isOnProjectsPath ? 'xxxl:!line-clamp-3 lg:!line-clamp-5 xs:!line-clamp-4' : ''} xl:text-sm md:text-[0.8125rem] md:leading-[22px]`}
            >
              {article}
            </p>
            <div className=" w-full hidden lg:flex justify-center mt-4 xs:mt-3">
              {isLandscapeOverflowed && (
                <button
                  onClick={() => {
                    router.push(`/project/${id}`);
                  }}
                  className="bg-blue-100 border-[1px] px-3 py-1 xs:text-sm border-black rounded-md font-medium inline left-0 hover:font-semibold lg:text-base md:text-[0.9375rem] -mt-[0.125rem] font-lora"
                >
                  {locale == 'de' ? (
                    <span>Weiterlesen...</span>
                  ) : (
                    <span>Read More...</span>
                  )}
                </button>
              )}
            </div>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
  if (aspectRatio === 'portrait-format') {
    return (
      <motion.div
        ref={projectInViewRef}
        initial={{
          x: 0,
          y: -60,
          scale: 0.75,
          opacity: 0,
        }}
        animate={isProjectInViewRef ? { x: 0, opacity: 1, scale: 1, y: 0 } : {}}
        viewport={{ once: true }}
        transition={{
          duration: isOnProjectsPath ? 0.85 : 0.75,
          ease: 'easeOut',
        }}
        className={`border-y-[#cbcbcb] border-x-[#cccccc] hover:border-x-[#b0b0b0] hover:border-y-[#b0b0b0] border flex flex-col items-center justify-start w-[32vw] lg:h-[100%] bg-white rounded-[6px] pt-5 pb-6 xxxl:pb-5 px-7 sm:px-[1.25rem] xs:px-[1rem] h-full ${isJustOneProject ? ' xxl:!w-[42vw] xl:!w-[48vw]' : ''} ${isOnProjectsPath ? 'xxxl:!w-[34vw] xl:!w-[33vw] lg:!w-[60vw] md:!w-[60vw] sm:!w-[80vw] xs:!w-[82vw]' : 'xxl:w-[38vw] xl:w-[40vw] lg:w-[60vw] md:!w-[66vw] sm:!w-[80vw] xs:!w-[82vw]'}`}
      >
        <motion.div
          whileHover={{ scale: 0.97 }}
          transition={{ duration: 0.12, ease: 'easeOut' }}
        >
          <Link href={`/project/${id}`}>
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

            <div className="flex xs:flex-col-reverse justify-center xs:items-center gap-[22px] xs:gap-1 mb-1 h-full">
              <div className="flex-grow">
                <div className={`max-h-[500px]`}>
                  <p
                    className={`font-mont text-sm xl:text-sm md:text-[0.8125rem] md:leading-[22px] line-clamp-[20] xxl:line-clamp-[17] xl:line-clamp-[14] lg:line-clamp-[20] md:line-clamp-[16] sm:line-clamp-[17] xs:line-clamp-4 tracking-[0.0125rem]`}
                    ref={articleRef}
                  >
                    {article}
                  </p>
                </div>
                <div className=" w-full hidden lg:flex justify-center mt-4 xs:mt-3">
                  {isLandscapeOverflowed && (
                    <button
                      onClick={() => {
                        router.push(`/project/${id}`);
                      }}
                      className="bg-blue-100 border-[1px] px-3 py-1 xs:text-sm border-black rounded-md font-medium inline left-0 hover:font-semibold lg:text-base md:text-[0.9375rem] -mt-[0.125rem] font-lora"
                    >
                      {locale == 'de' ? (
                        <span>Weiterlesen...</span>
                      ) : (
                        <span>Read More...</span>
                      )}
                    </button>
                  )}
                </div>
              </div>

              <div className="max-h-[600px] flex-shrink-0 w-[56%] xs:w-[88%]">
                <Image
                  alt={`project image about ${title}`}
                  src={imageUrl.trimEnd()}
                  width={600}
                  height={600}
                  className="rounded-[4px] object-contain transition-opacity duration-200 ease-in-out "
                  priority={true}
                />
                {checkCopyright() && (
                  <p className="text-xs text-left hover:cursor-default ml-[2px] mt-[1px]">
                    &copy; {copyrightImage}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      </motion.div>
    );
  }
};

export default ProjectsCardAsGrid;
