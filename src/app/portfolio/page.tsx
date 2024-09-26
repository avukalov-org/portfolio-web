import TransitionWrapper from "@/components/transition-wrapper";
import ProjectCard from "@/components/project-card";
import { Project } from "@/lib/definitions";

const projects: Project[] = [
  {
    title: "Projekt 1",
    description: "Opis projekta 1",
    image: "/images/hero.png",
  },
  {
    title: "Projekt 2",
    description: "Opis projekta 2",
    image: "/images/hero.png",
  },
  {
    title: "Projekt 1",
    description: "Opis projekta 1",
    image: "/images/hero.png",
  },
  {
    title: "Projekt 2",
    description: "Opis projekta 2",
    image: "/images/hero.png",
  },
  {
    title: "Projekt 1",
    description: "Opis projekta 1",
    image: "/images/hero.png",
  },
  {
    title: "Projekt 2",
    description: "Opis projekta 2",
    image: "/images/hero.png",
  },
];

const PortfolioPage: React.FC = () => {
  return (
    <TransitionWrapper className="h-full">
      <div className="h-full">
        <h1 className="text-3xl font-bold">Portfolio Page</h1>
        <div className="flex flex-row flex-wrap gap-8 w-1/4 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default PortfolioPage;
