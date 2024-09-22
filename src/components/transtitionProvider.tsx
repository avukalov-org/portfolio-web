"use client";

import React from "react";
import Navbar from "@/components/navbar";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

function TransitionProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div
        key={pathname}
        className="w-screen h-lvh lg:h-screen bg-gradient-to-b from-blue-100 to-red-100"
      >
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
          animate={{ height: "0vh" }}
          exit={{ height: "140vh" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        <motion.div
          className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-6xl md:text-8xl cursor-default w-fit h-fit capitalize"
          initial={{ opacity: 1, zIndex: 50 }}
          animate={{ opacity: 0, zIndex: 0 }}
          exit={{ opacity: 0, zIndex: 0 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
        >
          {pathname.substring(1)}
        </motion.div>
        <motion.div
          className="h-screen w-screen fixed bg-black rounded-t-[100px]  bottom-0 z-30"
          initial={{ height: "140vh" }}
          animate={{ height: "0vh", transition: { delay: 0.5 } }}
        />
        <header className="sticky top-0 bg-white h-16 md:h-20 shadow-lg">
          <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
            <Navbar />
          </div>
        </header>
        <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)]">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}

export default TransitionProvider;
