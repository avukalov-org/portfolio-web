"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <motion.div className="border rounded-lg p-4" whileHover={{ scale: 1.05 }}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={100}
        className="rounded-t-lg"
      />
      <h2 className="text-xl font-bold">{title}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default ProjectCard;
