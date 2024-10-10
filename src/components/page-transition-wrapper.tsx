'use client';
import { AnimatePresence } from 'framer-motion';
import MotionWrapper from './motion-wrapper';

const PageTransitionWrapper: React.FC<
  Readonly<{
    children: React.ReactNode;
    className?: string;
  }>
> = ({ children, className = '' }) => {
  return (
    <AnimatePresence mode="wait">
      <MotionWrapper
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{
          type: 'spring',
          duration: 0.8,
        }}
        className={`h-full ${className}`}
      >
        {children}
      </MotionWrapper>
    </AnimatePresence>
  );
};

export default PageTransitionWrapper;
