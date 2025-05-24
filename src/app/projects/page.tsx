import ProjectCardMobile from '@/app/projects/(components)/projectCardMobile';
import MotionWrapper from '@/components/motion-wrapper';
import { getProjects } from '@/lib/actions';
import { Project } from '@/lib/definitions';
import ProjectCardContainer from './(components)/projectCardContainer';

const PortfolioPage: React.FC = async () => {
  const projects = await getProjects();

  return (
    <div className="3xl:px-96 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64">
      <div className="flex flex-col gap-8 pt-12 md:gap-12 md:pt-12">
        <h1 className="text-4xl font-bold md:text-6xl">Projects: {projects.length}</h1>
        <div className="flex flex-col items-center justify-center gap-24 lg:gap-24">
          {projects.map((project: Project, index: number) => (
            <MotionWrapper
              className=""
              key={project.slug}
              initial={{ opacity: 0, x: index % 2 == 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCardContainer project={project} />
            </MotionWrapper>
          ))}
        </div>
      </div>
      {/* <ScrollingSkills /> */}
    </div>
  );
};

export default PortfolioPage;
