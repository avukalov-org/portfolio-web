'use client';

import { m } from 'framer-motion';

function Skills({
  skills,
  isSkillRefInView,
}: {
  skills: Array<string>;
  isSkillRefInView: boolean;
}) {
  return (
    <>
      {/* SKILL TITLE */}
      <m.h1
        initial={{
          opacity: 0,
          x: '-100px',
        }}
        animate={isSkillRefInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="text-2xl font-bold"
      >
        SKILLS
      </m.h1>
      {/* SKILL LIST */}
      <m.div
        initial={{ opacity: 0, x: '-100px' }}
        animate={isSkillRefInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.3,
          when: 'beforeChildren',
          staggerChildren: 0.2,
        }}
        className="flex flex-wrap gap-4"
      >
        {skills.map((skill: string, index: number) => (
          <div
            key={index}
            className="cursor-pointer select-none rounded bg-black p-2 text-sm text-white hover:bg-white hover:text-black"
          >
            {skill}
          </div>
        ))}
      </m.div>
    </>
  );
}

export default Skills;
