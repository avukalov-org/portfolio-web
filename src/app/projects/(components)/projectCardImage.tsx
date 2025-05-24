'use client';

import React from 'react';
import Image from 'next/image';

import { Project } from '@/lib/definitions';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';

const ProjectCardImage: React.FC<{ url: string; alt: string; classname?: string }> = ({
  url,
  alt,
  classname = '',
}) => {
  const breakpoint = useBreakpoint();

  var image = (
    <Image priority={false} src={url} alt={alt} width={500} height={500} className={classname} />
  );

  switch (breakpoint) {
    case '2xl':
      image = (
        <Image
          priority={false}
          src={url}
          alt={alt}
          width={1000}
          height={1000}
          className={classname}
        />
      );
      break;
    case 'xl':
      image = (
        <Image
          priority={false}
          src={url}
          alt={alt}
          width={1000}
          height={1000}
          className={classname}
        />
      );
      break;

    case 'lg':
      image = (
        <Image
          priority={false}
          src={url}
          alt={alt}
          width={1000}
          height={1000}
          className={classname}
        />
      );
      break;

    case 'md':
      image = (
        <Image
          priority={false}
          src={url}
          alt={alt}
          width={1000}
          height={1000}
          className={classname}
        />
      );
      break;

    default:
      break;
  }

  return image;
};

export default ProjectCardImage;
