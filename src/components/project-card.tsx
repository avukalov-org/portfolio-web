"use client";

import { Project, ProjectItem } from "@/lib/definitions";
import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const ProjectCardOld: React.FC<ProjectItem> = ({
  id,
  color,
  title,
  desc,
  img,
  link,
}) => {
  return (
    <div className="border rounded-lg bg-white shadow-lg">
      <div className="w-full relative">
        <Image
          src={img}
          alt={title}
          fill
          className="w-full h-full object-contain"
        />
        <div className="absolute top-0 right-0 bg-white bg-opacity-75 p-4 m-2 rounded-lg shadow-lg">
          <h3 className="text-lg font-bold">Card Title</h3>
          <p className="text-sm">This is some card content.</p>
        </div>
        {/* <h2 className="text-xl font-bold">{title}</h2>
        <p>{desc}</p> */}
      </div>
    </div>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="h-full w-full flex flex-col lg:flex-row gap-4 bg-white bg-opacity-40 rounded-lg shadow-xl p-4 md:p-16">
      <div className="relative h-1/2 lg:h-full w-full lg:w-1/2">
        <Image
          src={`/images/${project.image}`}
          alt={project.title}
          width={600}
          height={600}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="h-1/2 lg:h-full w-full lg:w-1/2">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={project.sourceUrl}
            className=""
          >
            Source link
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={project.liveUrl}
          >
            Demo link
          </Link>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard, ProjectCardOld };
