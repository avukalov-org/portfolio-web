"use client";

import ScrollingSkills from "@/components/scrolling-logos";

const PortfolioPage: React.FC = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-24">
      <h1 className="text-8xl font-bold">Portfolio Page</h1>
      <ScrollingSkills />
    </div>
  );
};

export default PortfolioPage;
