import { Link } from '@/i18n/routing';
import React, { ReactElement } from 'react';
import { useSearchParams } from 'next/navigation';

type Projects = {
  Project: ReactElement;
};

export const ProjectCategories = () => {
  return (
    <div className="flex justify-center text-base">
      <div className="ml-[120px]">
        <h2 className="uppercase font-mont">Categories</h2>
        <ul className=" *:border-b *:border-gray-300 *:mb-2 *:pb-[2px]">
          <li>
            <Link href="/projects/dance">Dance</Link>
          </li>
          <li>
            <Link href="/projects/pianism">Pianism</Link>
          </li>
          <li>
            <Link href="/projects/choirmastering">Choirmastering</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectCategories;
