'use client';

import ScrollingSkills from "@/components/scrolling-logos";
import { m, useInView } from "framer-motion";
import Experience from "./(components)/experience";
import { useRef } from "react";
import { ExperienceItem } from "@/lib/definitions";


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

function AboutPage() {
  const experienceRef = useRef(null);
  const isExperienceInView = useInView(experienceRef, {
    margin: "-50px",
    //once: true,
  });
  
  return (
    <div className="flex flex-col gap-16 py-16 lg:py-32">

        {/* EDUCATION SECTION */}
        <section id="education" className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 relative">
            <div className="flex flex-col z-20 text-center md:text-left gap-4 md:gap-0">
                <h1 className="text-6xl">Education</h1>
                <div className="flex flex-col italic text-center md:text-left">
                    <p className="font-bold text-2xl md:w-2/3">Education is not the learning of facts, but the training of the mind to think. <span className="font-semibold text-xl">- Albert Einstein</span></p>
                    
                </div>
                <p className="md:w-2/3 pt-24 md:pt-0">
                    <span className="font-semibold">I believe that knowledge is the foundation of all progress, and curiosity is the key to unlocking it.</span><br />
                    Through formal education, I developed analytical thinking, perseverance in problem-solving,
                    and a passion for continuous learning. I hold a Bachelor's degree in Mathematics and Computer
                    Science from the University of Josip Juraj Strossmayer in Osijek, where I built a strong foundation
                    in programming, algorithms, and logical reasoning—skills I now apply daily as a software engineer.
                </p>
            </div>

            {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}


            <m.div className="absolute self-end mr-5 mt-5 h-100 w-100 3xl:h-150 3xl:w-150 bg-yellow-300 rounded-full z-10" />
            <m.div className="absolute self-end h-100 w-100 3xl:h-150 3xl:w-150 bg-green-400 rounded-full z-10" />
            
        </section>

        <ScrollingSkills />

        <section id="skills" className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 relative">
            <div className="flex flex-col text-center md:text-right md:items-end gap-4 md:gap-0 z-20">
                <h1 className="text-6xl">Skills</h1>
                <p className="md:w-2/3 font-semibold md:font-normal">
                    Technology is my playground, and I enjoy exploring every corner
                    of it — from frontend design to backend architecture and DevOps automation.
                    Over the years, I&apos;ve worked with a wide range of tools and technologies,
                    but I&apos;ve developed a particular affinity for C# with .NET and Next.js,
                    where I combine performance with creativity.
                </p>
                <p className="md:w-2/3">I&apos;m comfortable switching between languages and frameworks,
                    and I thrive when facing new challenges. Whether it&apos;s building scalable APIs,
                    designing interactive UIs, or containerizing services with Docker, I approach
                    each task with curiosity and a desire to grow. Learning fast, adapting quickly,
                    and staying passionate about new technologies are what drive me as a developer.
                </p>
            </div>

            <m.div className="absolute self-start ml-5 mt-5 h-100 w-100 3xl:h-150 3xl:w-150 bg-yellow-300 rounded-full z-10" />
            <m.div className="absolute self-start h-100 w-100 3xl:h-150 3xl:w-150 bg-green-400 rounded-full z-10" />
        </section>

        <div className="h-30 w-full bg-amber-100 text-center">
            PARALLAX OR SOMETHING
        </div>

        <section id="experience" className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 relative">
            <div className="flex flex-col z-20 text-center md:text-left gap-4 md:gap-0">
                <h1 className="text-5xl md:text-6xl">Experience</h1>
                <div className="flex flex-col-reverse md:flex-row gap-32 lg:gap-24">
                    
                    <div className="flex flex-col md:w-1/2 lg:w-3/5">
                        <p className="">
                            <span className="font-semibold">They say experience is the best teacher — fortunately, I&apos;ve been a fast learner!</span>
                            <br />
                            While I may not &#40;yet&#41; have a decade of industry experience, I&apos;ve poured time,
                            energy, and creativity into real-world projects that reflect my skills, curiosity,
                            and drive to build meaningful software.
                        </p>
                        
                    </div>
                    <div className="flex justify-center md:w-1/2 lg:w-2/5">
                        <Experience list={expList} isExperienceInView />
                    </div>
                </div>
            </div>

            {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}
            <m.div className="absolute self-end mr-5 mt-5 h-100 w-100 3xl:h-150 3xl:w-150 bg-yellow-300 rounded-full z-10" />
            <m.div className="absolute self-end h-100 w-100 3xl:h-150 3xl:w-150 bg-green-400 rounded-full z-10" />
            
        </section>
        
        
        
    </div>
    
  );
}

export default AboutPage;
