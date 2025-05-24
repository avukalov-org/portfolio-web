'use client';

import { useBreakpoint } from '@/lib/hooks/useBreakpoint';
import React from 'react';
import ProjectCardDesktop from './projectCardDesktop';
import { Project } from '@/lib/definitions';
import ProjectCardMobile from './projectCardMobile';

const ProjectCardContainer: React.FC<{ project: Project }> = ({ project }) => {
  const breakpoint = useBreakpoint();
  if (breakpoint == 'xl' || breakpoint == '2xl') {
    return <ProjectCardDesktop project={project} />;
  }
  return <ProjectCardMobile project={project} />;
};

export default ProjectCardContainer;
