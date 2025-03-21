import React from 'react';
import type { SVGProps } from 'react';

export function GermanyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 64 64"
      {...props}
    >
      <path
        fill="#000000"
        d="M31.9 2C18.8 2 7.7 10.4 3.6 22h56.6C56.1 10.4 45 2 31.9 2"
      ></path>
      <path
        fill="#FFCC00"
        d="M31.9 62c13.1 0 24.2-8.3 28.3-20H3.6c4.1 11.7 15.2 20 28.3 20"
      ></path>
      <path
        fill="#DD0000"
        d="M3.6 22c-1.1 3.1-1.7 6.5-1.7 10s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10z"
      ></path>
    </svg>
  );
}
