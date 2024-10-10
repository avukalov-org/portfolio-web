'use client';

import { m } from 'framer-motion';
import { useEffect, useState } from 'react';

const RainbowButton: React.FC<{ text: string }> = ({ text }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 639px)').matches;
    setIsMobile(mobile);
  }, []);

  return (
    <m.button
      whileHover={!isMobile ? { scale: 1.1 } : {}}
      className="rounded-xl bg-gradient-to-b from-yellow-400 from-20% via-amber-500 to-orange-500 p-4 font-semibold text-black"
    >
      {text}
    </m.button>
  );
};

export default RainbowButton;
