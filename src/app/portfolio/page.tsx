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
];

const PortfolioPage: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Portfolio Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
