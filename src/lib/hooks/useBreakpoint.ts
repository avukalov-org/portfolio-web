import { useEffect, useState } from 'react';

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 2400,
};

export type Breakpoint = keyof typeof breakpoints | 'base';

export function useBreakpoint(): Breakpoint {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('base');

  useEffect(() => {
    const calcBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= breakpoints['3xl']) return '3xl';
      if (width >= breakpoints['2xl']) return '2xl';
      if (width >= breakpoints.xl) return 'xl';
      if (width >= breakpoints.lg) return 'lg';
      if (width >= breakpoints.md) return 'md';
      if (width >= breakpoints.sm) return 'sm';
      return 'base';
    };

    const update = () => setBreakpoint(calcBreakpoint());

    update(); // initial
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return breakpoint;
}
