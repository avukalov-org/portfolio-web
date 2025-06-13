'use client';

import ScrollingSkills from '@/components/scrolling-logos';
import { m, useInView } from 'framer-motion';
import Experience from './(components)/experience';
import { useRef } from 'react';
import { ExperienceItem, Skills } from '@/lib/definitions';
import Image from 'next/image';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import { skills } from '@/data/data';

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

const expList: Array<ExperienceItem> = [listItem2];

const divideList = (list: Skills[]) => {
  const index: number = Math.floor(list.length / 2);

  const first = list.slice(0, index);
  const second = list.slice(index);

  return [first.concat(first), second.concat(second)];
};

function AboutPage() {
  const breakpoint = useBreakpoint();
  const [first, second] = divideList(skills);

  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {
    margin: '-50px',
    //once: true,
  });

  function calcImageSize() {
    if (breakpoint == '3xl') return 500;
    return 300;
  }

  return (
    <div className="flex flex-col gap-16 py-16 lg:py-32 2xl:gap-64">
      {/* EDUCATION SECTION */}
      <section
        id="education"
        className="relative flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64"
      >
        <div className="z-20 flex flex-col gap-4 text-center md:gap-0 md:text-left">
          <h1 className="text-6xl">Education</h1>
          <div className="flex flex-col text-center italic md:text-left">
            <p className="text-2xl font-bold md:w-2/3">
              Education is not the learning of facts, but the training of the mind to think.{' '}
              <span className="text-xl font-semibold">- Albert Einstein</span>
            </p>
          </div>
          <p className="pt-24 md:w-2/3 md:pt-0">
            <span className="font-semibold">
              I believe that knowledge is the foundation of all progress, and curiosity is the key
              to unlocking it.
            </span>
            <br />
            Through formal education, I developed analytical thinking, perseverance in
            problem-solving, and a passion for continuous learning. I hold a Bachelor's degree in
            Mathematics and Computer Science from the University of Josip Juraj Strossmayer in
            Osijek, where I built a strong foundation in programming, algorithms, and logical
            reasoning—skills I now apply daily as a software engineer.
          </p>
        </div>

        {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}
        <m.div
          animate={{ y: [5, -15, 5] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute z-20 mt-20 mr-10 hidden self-end lg:flex"
        >
          <Image
            src="/images/mathos.png"
            alt="Mathos logo"
            width={calcImageSize()}
            height={calcImageSize()}
          />
        </m.div>
        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 mt-5 mr-5 h-100 w-100 self-end rounded-full bg-yellow-300" />
        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 h-100 w-100 self-end rounded-full bg-green-400" />
      </section>

      <section
        id="experience"
        className="relative flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64"
      >
        <div className="z-20 flex flex-col gap-4 text-center md:items-end md:gap-0 md:text-right">
          <h1 className="text-5xl md:text-6xl">Experience</h1>
          <div className="flex flex-col-reverse gap-32 md:flex-row lg:gap-24">
            <div ref={experienceRef} className="flex justify-center md:w-1/2 lg:w-2/5">
              <Experience list={expList} isExperienceInView={isExperienceInView} />
            </div>
            <div className="flex flex-col md:w-1/2 lg:w-3/5">
              <p className="">
                <span className="font-semibold">
                  They say experience is the best teacher — fortunately, I&apos;ve been a fast
                  learner!
                </span>
                <br />
                While I may not &#40;yet&#41; have a decade of industry experience, I&apos;ve poured
                time, energy, and creativity into real-world projects that reflect my skills,
                curiosity, and drive to build meaningful software.
              </p>
            </div>
          </div>
        </div>

        {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}

        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 mt-5 ml-5 h-100 w-100 self-start rounded-full bg-yellow-300" />
        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 h-100 w-100 self-start rounded-full bg-green-400" />
      </section>

      <div className="hidden md:flex md:flex-col">
        <ScrollingSkills skillsList={first} />
        <ScrollingSkills skillsList={second} direction="right" />
      </div>

      {/* <div className="h-30 w-full bg-amber-100 text-center">PARALLAX OR SOMETHING</div> */}
      {/* <ScrollingSkills skillsList={second} direction="right" /> */}

      <section
        id="skills"
        className="relative flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64"
      >
        <div className="z-20 flex flex-col gap-4 text-center md:gap-0 md:text-left">
          <h1 className="text-6xl">Skills</h1>
          <p className="font-semibold md:w-2/3 md:font-normal">
            Technology is my playground, and I enjoy exploring every corner of it — from frontend
            design to backend architecture and DevOps automation. Over the years, I&apos;ve worked
            with a wide range of tools and technologies, but I&apos;ve developed a particular
            affinity for C# with .NET and Next.js, where I combine performance with creativity.
          </p>
          <p className="md:w-2/3">
            I&apos;m comfortable switching between languages and frameworks, and I thrive when
            facing new challenges. Whether it&apos;s building scalable APIs, designing interactive
            UIs, or containerizing services with Docker, I approach each task with curiosity and a
            desire to grow. Learning fast, adapting quickly, and staying passionate about new
            technologies are what drive me as a developer.
          </p>
        </div>

        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 mt-5 mr-5 h-100 w-100 self-end rounded-full bg-yellow-300" />
        <m.div className="3xl:h-140 3xl:w-140 absolute z-10 h-100 w-100 self-end rounded-full bg-green-400" />
      </section>
    </div>
  );
}

export default AboutPage;
