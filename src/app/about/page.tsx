"use client";

import Experience from "@/app/about/(components)/experience";
import Skills from "@/app/about/(components)/skills";
import Brain from "@/components/brain";
import TransitionWrapper from "@/components/page-transition-wrapper";
import ParallaxSection from "@/components/paralax-test";
import ScrollingSkills from "@/components/scrolling-logos";
// import ArrowDownSVG from "@/components/arrowDownSvg";
// import Brain from "@/components/brain";
// import PersonalSignature from "@/components/personalSignature";
// import TransitionWrapper from "@/components/transitionWrapper";
import { ExperienceItem } from "@/lib/definitions";
import { useInView, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";

const skills: Array<string> = [
  "Javascript",
  "Typescript",
  "React.js",
  "Next.js",
  "Angular",
  "RxJS",
  "Tailwind CSS",
  "Framer Motion",
  "GraphQL",
  "Apollo",
  "Hasura",
  "MongoDB",
  "C#",
  ".Net",
  "RabbitMQ",
  "PostgreSQL",
  "Docker",
  "Linux",
  "Ubuntu",
  "Duende IdentityServer",
];

const listItem1: ExperienceItem = {
  title: "Full Stack Developer",
  desc: "I work on small projects for friends and myself using Next.js",
  date: "Dec 2023 - Present",
  company: {
    url: "https://portfolio-sigma-eight-22.vercel.app/",
    name: "avukalov.dev",
  },
};

const listItem2: ExperienceItem = {
  title: ".Net Backend Developer",
  desc: "I've worked on various tasks on the backend using .NET. From common tasks to microservices.",
  date: "Feb 2022 - Dec 2022",
  company: {
    url: "https://mono.software/",
    name: "Mono d.o.o.",
  },
};

const expList: Array<ExperienceItem> = [listItem1, listItem2];

function AboutPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-24">
      <h1 className="text-8xl font-bold">About Page</h1>
      <ScrollingSkills />
    </div>
  );
}

export default AboutPage;
