"use client";
import { motion } from "framer-motion";

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
      <motion.h1
        initial={{
          opacity: 0,
          x: "-100px",
        }}
        animate={isSkillRefInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
        SKILLS
      </motion.h1>
      {/* SKILL LIST */}
      <motion.div
        initial={{ opacity: 0, x: "-100px" }}
        animate={isSkillRefInView ? { opacity: 1, x: 0 } : {}}
        transition={{
          delay: 0.3,
          when: "beforeChildren",
          staggerChildren: 0.2,
        }}
        className="flex gap-4 flex-wrap"
      >
        {skills.map((skill: string, index: number) => (
          <div
            key={index}
            className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black select-none"
          >
            {skill}
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default Skills;
