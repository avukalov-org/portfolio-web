"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomeButtons: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    setIsMobile(mobile);
  }, []);

  return (
    <div className="pt-6 w-full flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 md:gap-12">
      <Link href="/portfolio">
        <m.button
          whileHover={!isMobile ? { scale: 1.05, rotate: "5deg" } : {}}
          className="p-4 rounded-xl bg-gradient-to-br from-violet-700 to-green-300 text-white"
        >
          View My Work
        </m.button>
      </Link>
      <Link href="/contact">
        <m.button
          whileHover={!isMobile ? { scale: 1.05, rotate: "5deg" } : {}}
          className="p-4 rounded-xl ring-2 ring-violet-900 text-violet-900"
        >
          Contact Me
        </m.button>
      </Link>
    </div>
  );
};

export default HomeButtons;
