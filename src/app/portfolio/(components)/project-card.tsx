'use client';

import MotionWrapper from '@/components/motion-wrapper';
import { Project, Tag } from '@/lib/definitions';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div
      className={`flex h-full w-full flex-col gap-8 rounded-2xl bg-white bg-opacity-60 from-white from-45% via-yellow-300 to-fuchsia-700 p-2 shadow-xl md:p-12 lg:flex-row lg:bg-gradient-to-tl`}
    >
      <div className="relative flex h-1/2 w-full justify-center lg:h-full lg:w-1/2">
        <Image
          src={project.image}
          alt={project.title}
          width={600}
          height={600}
          className="rounded-lg object-contain shadow-lg"
        />
      </div>
      <div className="h-1/2 w-full lg:h-full lg:w-1/2">
        <div className="flex h-full flex-col gap-8 p-2">
          {/* TITLE AND DESC */}
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <h1 className="text-4xl font-bold md:text-6xl">{project.title}</h1>
            <p className="text-lg">{project.description}</p>
          </div>

          <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-8">
            <div className="flex h-full w-full flex-col-reverse gap-4 lg:w-1/2 lg:flex-col lg:gap-8">
              <MotionWrapper whileHover={{ y: -5 }}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.sourceUrl}
                  className="flex w-full items-center justify-center gap-4 rounded-xl bg-white p-4 font-bold shadow-xl ring-1 ring-violet-700"
                >
                  <Image
                    src="/images/skills/github.svg"
                    alt="Github icon"
                    height={24}
                    width={24}
                    className=""
                  />{' '}
                  Source
                </Link>
              </MotionWrapper>
              <div className="flex h-full flex-row flex-wrap justify-center gap-8 rounded-xl p-8 lg:justify-end lg:self-end lg:p-4">
                {project.tags.map((tag: Tag) => (
                  <MotionWrapper
                    key={tag.documentId}
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <Image
                      src={`/images/skills/${tag.name.toLowerCase()}.svg`}
                      alt={tag.name}
                      height={30}
                      width={30}
                      className="cursor-pointer"
                    />
                  </MotionWrapper>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col gap-4 lg:w-1/2">
              <MotionWrapper whileHover={{ y: -5 }}>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.liveUrl}
                  className="flex w-full items-center justify-center gap-4 rounded-xl bg-white p-4 font-bold shadow-xl ring-1 ring-violet-700"
                >
                  Live Preview
                </Link>
              </MotionWrapper>
              {project.liveUser && (
                <div className="flex h-full flex-col gap-4 rounded-xl p-8">
                  <p className="text-xl lg:text-lg">
                    <span className="font-semibold">User: </span>
                    {project.liveUser}
                  </p>
                  <p className="text-xl lg:text-lg">
                    <span className="font-semibold">Password: </span>
                    {project.livePassword}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
