import React from 'react';
import type { SVGProps } from 'react';

export function ArrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 10l5 5m0 0l5-5"
      ></path>
    </svg>
  );
}
