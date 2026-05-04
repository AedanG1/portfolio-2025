import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projects";

const ProjectsGrid = () => {

  const projectCards = projects.map(
    (project) => (
      <ProjectCard 
        link={project.link}
        img={project.img}
        alt={project.alt}
        dateType={project.dateType}
        title={project.title}
        stackArr={project.stackArr}
        desc={project.desc}
        size="large"
      />
    ) 
  );

  return (
    <div className="space-y-12">
      <h1 className="text-4xl font-semibold w-full">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectCards}
        <div className="mt-12">
          View more of my projects on{" "}
          <a
            className="underline"
            target="blank"
            href="https://github.com/AedanG1"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsGrid;
