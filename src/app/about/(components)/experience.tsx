"use client";

import { ExperienceItem } from "@/lib/definitions";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <motion.h1
        initial={{ opacity: 0, x: "-100px" }}
        animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        EXPERIENCE
      </motion.h1>

      {/* EXPERIENCE LIST */}
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={isExperienceInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.3 }}
        className=""
      >
        {list.map((item: ExperienceItem, index: number) => (
          <div key={index} className="flex justify-between h-48">
            {/* LEFT */}
            {index % 2 === 0 ? (
              <div className="w-2/5">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {item.title}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">{item.desc} </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  {item.date}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 ml-2 rounded bg-white text-sm font-semibold w-fit">
                  <Link href={item.company.url}>{item.company.name}</Link>
                </div>
              </div>
            ) : (
              <div className="w-2/5"></div>
            )}

            {/* CENTER */}
            <div className="w-1/5 flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-700 rounded relative flex justify-center">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white self-start"></div>
              </div>
            </div>
            {/* RIGHT */}
            {index % 2 !== 0 ? (
              <div className="w-2/5">
                {/* JOB TITLE */}
                <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                  {item.title}
                </div>
                {/* JOB DESC */}
                <div className="p-3 text-sm italic">{item.desc} </div>
                {/* JOB DATE */}
                <div className="p-3 text-red-400 text-sm font-semibold">
                  {item.date}
                </div>
                {/* JOB COMPANY */}
                <div className="p-1 ml-2 rounded bg-white text-sm font-semibold w-fit">
                  <Link href={item.company.url}>{item.company.name}</Link>
                </div>
              </div>
            ) : (
              <div className="w-2/5"></div>
            )}
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Experience;
