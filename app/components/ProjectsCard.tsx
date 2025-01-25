import Image from 'next/image';
import React from 'react';
import choirmastering from '../../public/projects/Dirigieren-in-Kirche.jpg';

const ProjectsCard = () => {
  return (
    <div className="border-b border-gray-400 pb-6 flex flex-col items-center justify-center max-w-[600px] mt-10">
      <h2 className="border-b-[1px] border-blue-900 text-center text-xs mb-3 pb-[2px] uppercase font-mont tracking-wider">
        Choirmaster
      </h2>
      <h2 className="text-center mb-1">
        Leading the Biedermannsdorf choir in St. Michael church
      </h2>
      <p className="text-center font-mont text-xs mb-4">
        Published on: Tuesday, 22th October 2024 by Simeon Ohlsen
      </p>
      <Image
        alt="Simeon leading a choir"
        src={choirmastering}
        width={600}
        className="rounded-sm max-w-[h-600px] max-h-[600px] object-contain"
      />
      <p className="font-mont text-sm mt-3">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>
    </div>
  );
};

export default ProjectsCard;
