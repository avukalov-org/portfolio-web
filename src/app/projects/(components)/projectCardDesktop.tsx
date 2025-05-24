import { Project, Tag } from '@/lib/definitions';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import ProjectCardImage from './projectCardImage';
import GlobeAltIcon from '@/components/icons/GlobeAltIcon';
import CodeBracketIcon from '@/components/icons/CodeBracketIcon';

const ProjectCardDesktop: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={`flex flex-col rounded-2xl px-12 py-4 shadow-2xl`}>
      <div className="flex gap-4">
        <div className="mt-10 flex w-1/2 flex-col">
          <h1 className="font-bold">{project.title}</h1>
          <Link
            target={project.sourceUrl == '' ? undefined : '_blank'}
            rel="noopener noreferrer"
            href={project.sourceUrl == '' ? '#' : project.sourceUrl}
            className=""
          >
            {project.liveUrl}
          </Link>
          <div className="flex flex-row gap-2 md:gap-8">
            {project.tags.map((tag: Tag) => (
              <Image
                key={tag.id}
                src={tag.image.url}
                alt={tag.name}
                height={32}
                width={32}
                className="cursor-pointer"
              />
            ))}
          </div>
          <div className="flex flex-col md:flex-row md:gap-8">
            <Link
              target={project.liveUrl == '' ? undefined : '_blank'}
              rel="noopener noreferrer"
              href={project.liveUrl}
              className={`${project.liveUrl == '' ? 'hidden' : ''} flex items-center gap-4`}
            >
              <GlobeAltIcon />
              Live Preview
            </Link>
            <Link
              target={project.sourceUrl == '' ? undefined : '_blank'}
              rel="noopener noreferrer"
              href={project.sourceUrl == '' ? '#' : project.sourceUrl}
              className={`${project.sourceUrl == '' ? 'hidden' : ''} flex items-center gap-4`}
            >
              <CodeBracketIcon />
              Source Code
            </Link>
          </div>
          <p className="">{project.description}</p>
        </div>
        <div className="flex w-1/2 flex-col items-start">
          <Image
            priority={false}
            src={project.image.url}
            alt={project.title}
            width={1000}
            height={1000}
            className="self-center rounded-md border-2 border-black object-top"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectCardDesktop;
