"use client";

import { ProjectItem } from "@/lib/definitions";
import { motion } from "framer-motion";
import Image from "next/image";

const ProjectCard: React.FC<ProjectItem> = ({
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

export default ProjectCard;
