'use client';

import { ExperienceItem } from '@/lib/definitions';
import { m } from 'framer-motion';
import Link from 'next/link';

function Experience({
  list,
  isExperienceInView,
}: {
  list: Array<ExperienceItem>;
  isExperienceInView: boolean;
}) {
  return (
    <>
      {/* EXPERIENCE TITLE */}
      {/* <m.h1
        initial={{ opacity: 0, x: "-100px" }}
        animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EXPERIENCE
      </m.h1> */}

      {/* EXPERIENCE LIST */}
      <m.div
        initial={{ opacity: 0, x: '-100px' }}
        animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className=""
      >
        {list.map((item: ExperienceItem, index: number) => (
          <div key={index} className="flex h-48 justify-between">
            {/* LEFT */}
            {index % 2 === 0 ? (
              <div className="w-4/5">
                {/* JOB TITLE */}
                <div className="rounded-s-lg rounded-b-lg bg-white p-3 font-semibold">
                  {item.title}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">{item.desc} </div>
                {/* JOB DATE */}
                <div className="p-3 text-sm font-semibold">{item.date}</div>
                {/* JOB COMPANY */}
                <div className="ml-2 w-fit rounded bg-white p-1 text-sm font-semibold">
                  <Link href={item.company.url}>{item.company.name}</Link>
                </div>
              </div>
            ) : (
              <div className="w-2/5"></div>
            )}

            {/* CENTER */}
            <div className="flex w-1/5 justify-center">
              {/* LINE */}
              <div className="relative flex h-full w-1 justify-center rounded bg-gray-700">
                {/* LINE CIRCLE */}
                <div className="absolute h-5 w-5 self-start rounded-full bg-white ring-4 ring-red-400"></div>
              </div>
            </div>
            {/* {index % 2 !== 0 ? (
              <div className="w-2/5">
  
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {item.title}
                </div>
  
                <div className="p-3 text-sm italic">{item.desc} </div>
  
                <div className="p-3 text-red-400 text-sm font-semibold">
                  {item.date}
                </div>
  
                <div className="p-1 ml-2 rounded bg-white text-sm font-semibold w-fit">
                  <Link href={item.company.url}>{item.company.name}</Link>
                </div>
              </div>
            ) : (
              <div className="w-2/5"></div>
            )} */}
          </div>
        ))}
      </m.div>
    </>
  );
}

export default Experience;
