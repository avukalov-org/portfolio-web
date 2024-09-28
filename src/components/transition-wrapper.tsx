"use client";
import { m } from "framer-motion";
import { NodeProps } from "postcss";

const TransitionWrapper: React.FC<
  Readonly<{
    children: React.ReactNode;
    className?: string;
  }>
> = ({ children, className = "" }) => {
  return (
    <m.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className={`h-full ${className}`}
    >
      {children}
    </m.div>
  );
};

export default TransitionWrapper;
