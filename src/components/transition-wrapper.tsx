"use client";
import { motion } from "framer-motion";
import { NodeProps } from "postcss";

const TransitionWrapper: React.FC<
  Readonly<{
    children: React.ReactNode;
    className?: string;
  }>
> = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ y: -25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className={`h-full ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TransitionWrapper;
