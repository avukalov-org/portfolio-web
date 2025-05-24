import { Project, Tag } from '@/lib/definitions';
import React from 'react';
import ProjectCardImage from './projectCardImage';
import Image from 'next/image';
import Link from 'next/link';
import GlobeAltIcon from '@/components/icons/GlobeAltIcon';
import CodeBracketIcon from '@/components/icons/CodeBracketIcon';

const ProjectCardMobile: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className={`flex flex-col rounded-2xl p-4 py-12 shadow-2xl md:px-12`}>
      <h1 className="text-center font-bold">{project.title}</h1>

      <Link
        target={project.sourceUrl == '' ? undefined : '_blank'}
        rel="noopener noreferrer"
        href={project.sourceUrl == '' ? '#' : project.sourceUrl}
        className="self-center"
      >
        {project.liveUrl}
      </Link>
      <div className="flex flex-col gap-2">
        <Image
          priority={false}
          src={project.image.url}
          alt={project.title}
          width={1000}
          height={1000}
          className="self-center rounded-md border-2 border-black object-top"
        />
        <h5 className="">{project.description}</h5>
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
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
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
        <div className="flex justify-center"></div>
      </div>
    </div>
  );
};

export default ProjectCardMobile;
