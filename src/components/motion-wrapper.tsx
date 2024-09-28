"use client";

import { m, MotionProps } from "framer-motion";
import React from "react";

// MotionWrapper komponenta koja prenosi animacijske props-e na <m.div>
interface MotionWrapperProps extends MotionProps {
  className?: string;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({
  children,
  className = "",
  ...motionProps
}) => {
  return (
    <m.div className={className} {...motionProps}>
      {children}
    </m.div>
  );
};

export default MotionWrapper;
