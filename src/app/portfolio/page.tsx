"use client";

import TransitionWrapper from "@/components/transition-wrapper";
import ProjectCard from "@/components/project-card";
import { projects } from "@/lib/data";
import { Project } from "@/lib/definitions";
import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

const PortfolioPage: React.FC = () => {
  return (
    <div className="h-full w-full py-12 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 overflow-auto">
      {/* MOBILE VIEW */}
      <div className="lg:hidden flex flex-col gap-16">
        {projects.map((item) => (
          <div className={`flex items-center justify-center `} key={item.id}>
            <div className="flex flex-col gap-8 rounded-xl bg-white bg-opacity-30 shadow-xl p-2 py-4 sm:p-6 md:p-12 mx-4 sm:m-0 w-80 sm:w-96 md:w-[500px]">
              <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-gray-900">
                {item.title}
              </h1>
              <div className="relative w-full h-48 sm:h-52 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                <Image src={item.img} alt={item.title} fill />
              </div>
              <p className="w-full md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-gray-900">
                {item.desc}
              </p>
              <div className="flex items-center justify-end">
                <Link
                  href={item.link}
                  className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 ring-1 ring-gray-200 font-semibold m-2 rounded flex items-center gap-2"
                >
                  <Image
                    src="/github.png"
                    alt="Github"
                    width={16}
                    height={16}
                  />{" "}
                  Source Code
                </Link>
                <Link
                  href={item.link}
                  className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-2 rounded"
                >
                  See Demo
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESKTOP VIEW */}
      <div className="flex flex-col gap-24 ">
        {projects.map((item, index) => (
          <div
            key={index}
            className="flex flex-row bg-white rounded-lg shadow-2xl"
          >
            {/* IMAGE CONTAINER */}
            <motion.div className="h-full w-1/2 relative ">
              <Image
                src={item.img}
                alt="My portrait"
                fill
                className="h-full object-cover"
              />
            </motion.div>

            {/* TEXT CONTAINER */}
            <div className="h-full w-full lg:w-1/2 text-violet-900">
              <div className="h-full flex flex-col pt-12 lg:pt-0 justify-start lg:justify-center gap-4">
                <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl text-gray-900">
                  {item.title}
                </h1>
                {/* <div className="relative w-full h-48 sm:h-52 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                  <Image src={item.img} alt={item.title} fill />
                </div> */}
                <p className="w-full md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-gray-900 ">
                  {item.desc}
                </p>
                <div className="flex items-center justify-end">
                  <Link
                    href={item.link}
                    className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 ring-1 ring-gray-200 font-semibold m-2 rounded flex items-center gap-2"
                  >
                    <Image
                      src="/images/github.png"
                      alt="Github"
                      width={16}
                      height={16}
                    />{" "}
                    Source Code
                  </Link>
                  <Link
                    href={item.link}
                    className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-black text-white font-semibold m-2 rounded"
                  >
                    See Demo
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
