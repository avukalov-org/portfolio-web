"use client";

import Image from "next/image";
import { animate, m } from "framer-motion";

import TransitionWrapper from "@/components/page-transition-wrapper";
import RainbowButton from "@/components/rainbow-button";
import { useEffect, useState } from "react";
import MotionWrapper from "@/components/motion-wrapper";
import Link from "next/link";

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    setIsMobile(mobile);
  }, []);

  return (
    <TransitionWrapper>
      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="h-full flex flex-col lg:flex-row-reverse">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 hidden relative lg:flex items-end justify-end ">
            <Image
              src="/images/coder.png"
              alt="My portrait"
              fill
              quality={100}
              className="object-contain scale-110"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="h-full w-full lg:w-1/2 text-violet-900">
            <div className="h-full flex flex-col pt-12 lg:pt-0 justify-start lg:justify-center gap-4">
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
                <h1 className="">Hi! I'am</h1>
                <h1 className="bg-gradient-to-b from-amber-500 from-50% to-orange-500 bg-clip-text text-transparent">
                  Antonio
                </h1>
              </div>
              <div className="text-xl md:text-2xl font-semibold text-center lg:text-start">
                <p className="2xl:hidden">
                  a passionate software developer with a strong foundation in
                  mathematics and computer science. Let's create something
                  amazing together!
                </p>
                <p className="hidden 2xl:flex">
                  a passionate software developer. I specialize in crafting
                  innovative solutions and building intuitive applications. With
                  a strong foundation in mathematics and computer science, I
                  strive to turn ideas into reality, whether it's developing
                  dynamic web applications or optimizing backend systems. Let's
                  create something amazing together!
                </p>
              </div>
              {/* BUTTONS */}
              <div className="pt-6 w-full flex flex-col sm:flex-row justify-center items-center lg:justify-start gap-4 md:gap-12">
                <Link href="/portfolio" className="shadow-xl">
                  <RainbowButton text="View My Work" />
                </Link>
                <Link href="/contact" className="shadow-xl">
                  <m.button
                    whileHover={!isMobile ? { scale: 1.1 } : {}}
                    className="p-4 rounded-xl ring-2 ring-violet-900 text-violet-900"
                  >
                    Contact Me
                  </m.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default HomePage;
