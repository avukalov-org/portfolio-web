import { ProjectCard } from "@/components/project-card";
import ScrollingSkills from "@/components/scrolling-logos";
import { getProjects } from "@/lib/actions";
import { Project } from "@/lib/definitions";
import Image from "next/image";
import Link from "next/link";

const PortfolioPage: React.FC = async () => {
  const { projects, pagination } = await getProjects();
  console.log(projects, pagination);

  return (
    <div className="h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 overflow-y-scroll">
      <div className="flex flex-col overflow-y-auto">
        <div className="w-full flex py-8 md:py-12">
          <h1 className="text-4xl md:text-6xl font-bold">
            Projects: {pagination.total}
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-8 pb-8 md:pb-12">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        {/* <ScrollingSkills /> */}
      </div>
    </div>
  );
};

export default PortfolioPage;
