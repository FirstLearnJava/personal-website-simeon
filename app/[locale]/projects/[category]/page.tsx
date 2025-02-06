import Projects from '@/app/components/Projects';
import { Link } from '@/i18n/routing';
import React from 'react';

export default function ProjectPage({
  params,
}: {
  params: { category?: string | undefined };
}) {
  const category = params.category;

  return (
    <div className="flex justify-center text-base">
      <Projects category={category} />
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
}
