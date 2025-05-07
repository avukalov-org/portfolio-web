import ProjectCard from "@/app/projects/(components)/project-card";
import MotionWrapper from "@/components/motion-wrapper";
import { getProjects } from "@/lib/actions";
import { Project } from "@/lib/definitions";

const PortfolioPage: React.FC = async () => {
  const projects = await getProjects();

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 sm:px-8 md:h-[calc(100vh-5rem)] md:px-12 lg:px-24 xl:px-48">
      <div className="flex flex-col overflow-y-auto">
        <div className="flex w-full py-8 md:py-12">
          <h1 className="text-4xl font-bold md:text-6xl">
            Projects: {projects.length}
          </h1>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-x-hidden pb-8 md:pb-12 lg:gap-24">
          {projects.map((project: Project, index: number) => (
            <MotionWrapper
              className="w-full 3xl:w-3/4"
              key={project.slug}
              initial={{ opacity: 0, x: index % 2 == 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </MotionWrapper>
          ))}
        </div>
        {/* <ScrollingSkills /> */}
      </div>
    </div>
  );
};

export default PortfolioPage;
