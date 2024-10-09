import { ProjectCard } from '@/components/project-card';
import { getProjects } from '@/lib/actions';
import { Project } from '@/lib/definitions';

const PortfolioPage: React.FC = async () => {
  const { projects, pagination } = await getProjects();
  console.log(projects, pagination);

  return (
    <div className="h-[calc(100vh-4rem)] overflow-y-auto px-4 sm:px-8 md:h-[calc(100vh-5rem)] md:px-12 lg:px-24 xl:px-48">
      <div className="flex flex-col overflow-y-auto">
        <div className="flex w-full py-8 md:py-12">
          <h1 className="text-4xl font-bold md:text-6xl">
            Projects: {pagination.total}
          </h1>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-8 pb-8 md:pb-12 lg:gap-24">
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
