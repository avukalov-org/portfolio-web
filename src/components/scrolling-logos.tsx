'use client';

import { Skills } from '@/lib/definitions';
import { m } from 'framer-motion';
import Image from 'next/image';
// import { SetStateAction, useEffect } from 'react';

const skills: Skills[] = [
  // Dodaj svoje logotipove ovdje
  { id: 1, name: 'angular', src: 'angular.svg' },
  { id: 2, name: 'csharp', src: 'csharp.svg' },
  { id: 3, name: 'docker', src: 'docker.svg' },
  { id: 4, name: 'dotnet', src: 'dotnet.svg' },
  { id: 5, name: 'framer', src: 'framer.svg' },
  { id: 6, name: 'graphql', src: 'graphql.svg' },
  { id: 7, name: 'hasura', src: 'hasura.svg' },
  { id: 8, name: 'javascript', src: 'javascript.svg' },
  { id: 9, name: 'linux', src: 'linux.svg' },
  { id: 10, name: 'mongodb', src: 'mongodb.svg' },
  { id: 11, name: 'nextjs', src: 'nextjs.svg' },
  { id: 12, name: 'postgresql', src: 'postgresql.svg' },
  { id: 13, name: 'python', src: 'python.svg' },
  { id: 14, name: 'rabbitmq', src: 'rabbitmq.svg' },
  { id: 15, name: 'react', src: 'react.svg' },
  { id: 16, name: 'tailwind', src: 'tailwind.svg' },
  { id: 17, name: 'typescript', src: 'typescript.svg' },
  { id: 18, name: 'ubuntu', src: 'ubuntu.svg' },
  { id: 19, name: 'auth0', src: 'auth0.svg' },
  { id: 20, name: 'dotnet', src: 'dotnet.svg' },
  // ...
];

const divideList = (list: Skills[]) => {
  const index: number = Math.floor(list.length / 2);

  const first = list.slice(0, index);
  const second = list.slice(index);

  return [first.concat(first), second.concat(second)];
};

const scrollingVariant = (direction: string) => ({
  animate: {
    x: direction === 'left' ? ['0%', '-100%'] : ['-100%', '0%'],
    transition: {
      x: {
        ease: 'linear',
        duration: 20, // Prilagodi vrijeme trajanja animacije
        repeat: Infinity,
        // repeatType: "loop",
      },
    },
  },
});

const ScrollingSkills: React.FC<{
  skillsList: Skills[];
  first?: boolean;
  direction?: string;
}> = ({ skillsList, first = true, direction = 'left' }) => {
  // const [f, second] = divideList(skills);

  return (
    <div className="relative z-20 mx-auto flex w-full flex-col gap-4 overflow-hidden py-2 select-none">
      {/* <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div> */}

      <m.div className="flex" variants={scrollingVariant(direction)} animate="animate">
        {skillsList.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 bg-white py-4 md:border-y-2 md:border-gray-300`}
            style={{ width: `${100 / (skills.length / 2)}%` }}
          >
            <div className="flex h-full items-center justify-center">
              <Image
                key={slide.id + Math.random()} // Za svaki red daj drugačiji ključ zbog dupliciranja
                src={`/images/skills/${slide.src}`}
                alt="logo"
                width={50}
                height={50}
                className="" // Veličina logotipa
              />
              {/* <p>{slide.name}</p> */}
            </div>
          </div>
        ))}
      </m.div>
      {/* <m.div className="flex" variants={scrollingVariant('right')} animate="animate">
        {second.map((slide, index) => (
          <div
            key={index}
            className={`hover:bg-opacity-45 flex-shrink-0 py-4 hover:bg-gray-50 md:border-y-2 md:border-l-2 md:border-gray-50`}
            style={{ width: `${100 / (skills.length / 2)}%` }}
          >
            <div className="flex h-full items-center justify-center">
              <Image
                key={slide.id + Math.random()} // Za svaki red daj drugačiji ključ zbog dupliciranja
                src={`/images/skills/${slide.src}`}
                alt="logo"
                width={50}
                height={50}
                className="" // Veličina logotipa
              />
            </div>
          </div>
        ))}
      </m.div> */}
    </div>
  );
};

export default ScrollingSkills;
