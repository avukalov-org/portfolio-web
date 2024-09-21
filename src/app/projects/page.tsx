import ProjectCard from "@/components/project-card";
import { Project } from "@/lib/definitions";

const projects: Project[] = [
  { title: "Projekt 1", description: "Opis projekta 1", image: "/hero.png" },
  { title: "Projekt 2", description: "Opis projekta 2", image: "/hero.png" },
];

const ProjectsPage: React.FC = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold">Projects Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
