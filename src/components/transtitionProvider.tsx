"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import useMobileView from "@/lib/hooks/use-mobile-view";

function TransitionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isMobile = useMobileView();
  console.log(`transtionProvider:  ${!isMobile}`);
  console.log(
    `transtionProvider:  ${!isMobile ? "animateState" : "exitState"}`
  );

  const desktopVariants = {
    initialState: {
      opacity: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    animateState: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    },
    exitState: {
      clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
    },
  };

  const mobileVariants = {
    initialState: {
      opacity: 0,
      clipPath: "polygon(0 0, 0% 0, 0% 100%, 0 100%)", // Zatvoreno s lijeva
    },
    animateState: {
      opacity: 1,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Otvara se prema desno
    },
    exitState: {
      opacity: 0,
      clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)", // Zatvara se prema desno
    },
  };

  return (
    <AnimatePresence mode="wait">
      <m.div
        key={pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: !isMobile ? 0.75 : 0.55,
        }}
        variants={!isMobile ? desktopVariants : mobileVariants}
        className="w-full min-h-screen"
      >
        <m.div
          key={pathname}
          initial="initialStatee"
          animate="animateStatee"
          exit="exitStatee"
          transition={{
            duration: 0.75,
            ease: "easeOut",
          }}
          variants={{
            initialStatee: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", // Element počinje od sredine gore (kao linija)
            },
            animateStatee: {
              opacity: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Element se "otvara" prema dolje preko cijelog ekrana
            },
            exitStatee: {
              opacity: 0,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", // Element se opet smanjuje prema liniji u sredini
            },
          }}
          className="w-full min-h-screen bg-gradient-to-t lg:bg-[radial-gradient(circle_at_right_bottom,_var(--tw-gradient-stops))] from-violet-950 via-green-200 to-white"
        >
          {children}
        </m.div>
      </m.div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
