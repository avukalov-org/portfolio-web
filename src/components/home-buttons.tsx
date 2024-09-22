"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeButtons: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    setIsMobile(mobile);
  }, []);

  console.log(isMobile);
  return (
    <div className="pt-6 w-full flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 md:gap-8">
      <Link href="/portfolio">
        <motion.button
          whileHover={!isMobile ? { y: -5 } : {}}
          className="p-4 rounded-lg bg-gradient-to-br from-violet-950 from-10% to-green-700 text-white"
        >
          View My Work
        </motion.button>
      </Link>
      <Link href="/contact">
        <motion.button
          whileHover={!isMobile ? { y: -5 } : {}}
          className="p-4 rounded-lg ring-2 ring-violet-900 text-violet-900"
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
};

export default HomeButtons;
