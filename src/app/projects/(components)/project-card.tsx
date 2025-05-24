'use client';

import MotionWrapper from '@/components/motion-wrapper';
import { Project, Tag } from '@/lib/definitions';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import Image from 'next/image';
import Link from 'next/link';
import ProjectCardImage from './projectCardImage';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={`flex flex-col rounded-2xl shadow-2xl`}>
      <div className="flex flex-col p-16 xl:flex-row">
        {/* <Image
          priority={false}
          src={project.image.url}
          alt={project.title}
          width={800}
          height={800}
          className="rounded-lg object-contain shadow-lg"
        /> */}
        {/* TITLE AND DESC */}
        <div className="flex flex-col gap-4 text-center lg:text-start xl:w-1/2">
          <h1 className="text-4xl font-bold md:text-6xl">{project.title}</h1>
          <p className="text-lg">{project.description}</p>
        </div>
        <ProjectCardImage url={project.image.url} alt={project.title} classname="object-top" />
      </div>
      <div className="">
        <div className="flex h-full flex-col gap-8 p-2">
          <div className="flex h-full w-full flex-col gap-4 lg:flex-row lg:gap-8">
            <div className="flex h-full w-full flex-col-reverse gap-4 lg:w-1/2 lg:flex-col lg:gap-8">
              <MotionWrapper whileHover={project.sourceUrl != '' ? { y: -5 } : undefined}>
                <Link
                  target={project.sourceUrl == '' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  href={project.sourceUrl == '' ? '#' : project.sourceUrl}
                  className={`${project.sourceUrl == '' ? 'bg-gray-200 ring-gray-700' : 'bg-white ring-violet-700'} flex w-full items-center justify-center gap-4 rounded-xl p-4 font-bold shadow-xl ring-1`}
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
                    key={tag.id}
                    whileHover={{
                      scale: 1.5,
                    }}
                  >
                    <Image
                      src={tag.image.url}
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
