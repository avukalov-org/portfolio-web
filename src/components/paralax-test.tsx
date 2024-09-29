"use client";

import { m, useScroll, useTransform } from "framer-motion";

const ParallaxSection = () => {
  const { scrollY } = useScroll();

  // Animira pozadinski sloj da se kreće sporije od foreground sloja
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 200]);
  const foregroundY = useTransform(scrollY, [0, 1000], [0, 100]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background layer */}
      <m.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/hero.png)",
          y: backgroundY,
        }}
      />

      {/* Foreground layer */}
      <m.div
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center"
        style={{ y: foregroundY }}
      >
        <h1 className="text-white text-6xl">Foreground Text</h1>
      </m.div>
    </div>
  );
};

export default ParallaxSection;
