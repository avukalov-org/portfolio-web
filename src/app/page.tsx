"use client";

import Image from "next/image";
import { m } from "framer-motion";

import TransitionWrapper from "@/components/transition-wrapper";
import HomeButtons from "@/components/home-buttons";
import { useEffect, useState } from "react";

const HomePage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 639px)").matches;
    setIsMobile(mobile);
  }, []);

  return (
    <TransitionWrapper className="h-full ">
      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="h-full flex flex-col lg:flex-row-reverse">
          {/* IMAGE CONTAINER */}
          <m.div
            whileHover={{ scale: 0.85, rotate: "5deg" }}
            className="h-1/2 lg:h-full lg:w-1/2 hidden relative lg:flex items-end justify-end "
          >
            <Image
              src="/images/coder.png"
              alt="My portrait"
              fill
              quality={100}
              className="object-contain"
            />
          </m.div>

          {/* TEXT CONTAINER */}
          <div className="h-full w-full lg:w-1/2 text-violet-900">
            <div className="h-full flex flex-col pt-12 lg:pt-0 justify-start lg:justify-center gap-4">
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
                <m.h1
                  initial={{ y: -50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1,
                    ease: "easeInOut",
                  }}
                  className=""
                >
                  Hi! I am
                </m.h1>
                <m.h1
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                    ease: "easeInOut",
                  }}
                  className="text-green-600"
                >
                  Antonio Vukalović
                </m.h1>
              </div>
              <m.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.2,
                  ease: "easeInOut",
                }}
                className="text-xl md:text-2xl font-semibold text-center lg:text-start"
              >
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
              </m.div>
              {/* BUTTONS */}
              <HomeButtons />
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default HomePage;
