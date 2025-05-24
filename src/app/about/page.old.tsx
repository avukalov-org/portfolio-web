'use client';

import ScrollingSkills from '@/components/scrolling-logos';
import Experience from './(components)/experience';
import Skills from './(components)/skills';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { ExperienceItem } from '@/lib/definitions';
// import ArrowDownSVG from "@/components/arrowDownSvg";
// import Brain from "@/components/brain";
// import PersonalSignature from "@/components/personalSignature";
// import TransitionWrapper from "@/components/transitionWrapper";
// import { ExperienceItem } from '@/lib/definitions';

const skills: Array<string> = [
  'Javascript',
  'Typescript',
  'React.js',
  'Next.js',
  'Angular',
  'RxJS',
  'Tailwind CSS',
  'Framer Motion',
  'GraphQL',
  'Apollo',
  'Hasura',
  'MongoDB',
  'C#',
  '.Net',
  'RabbitMQ',
  'PostgreSQL',
  'Docker',
  'Linux',
  'Ubuntu',
  'Duende IdentityServer',
];

const listItem1: ExperienceItem = {
  title: 'Full Stack Developer',
  desc: 'I work on small projects for friends and myself using Next.js',
  date: 'Dec 2023 - Present',
  company: {
    url: 'https://avukalov.com',
    name: 'avukalov.com',
  },
};

const listItem2: ExperienceItem = {
  title: '.Net Backend Developer',
  desc: "I've worked on various tasks on the backend using .NET. From common tasks to microservices.",
  date: 'Feb 2022 - Dec 2022',
  company: {
    url: 'https://mono.software/',
    name: 'Mono d.o.o.',
  },
};

const expList: Array<ExperienceItem> = [listItem1, listItem2];

function AboutPage() {

  const skillRef = useRef(null);
  const isSkillRefInView = useInView(skillRef, {
    margin: "-50px",
    //once: true,
  });

  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {
    margin: "-50px",
    //once: true,
  });
  
  return (
    <div className="flex h-full flex-col items-center justify-center gap-24">
      {/* <h1 className="text-8xl font-bold">About Page</h1> */}
      <div className="p-4 sm:p-8 md:p-12 lg:p-24 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2 lg:pr-0">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptatum consectetur earum! Similique, voluptas! Non rem
              repudiandae ex distinctio officia eius sapiente minima eos totam
              ipsam, voluptatum dolorum at aliquam.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            {/* BIOGRAPHY SIGNATURE */}
            {/* <PersonalSignature /> */}
          </div></div>

      <ScrollingSkills />
      <Experience list={expList} isExperienceInView />
      <Skills skills={skills} isSkillRefInView />
    </div>
  );
}

export default AboutPage;
