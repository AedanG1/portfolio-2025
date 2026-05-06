import ProjectCard from "../Projects/ProjectCard";
import { projects } from "../../data/projects";

const ProjectsSummary = () => {

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
        size="small"
      />
    ) 
  );

  return (
    <section className="flex flex-col md:flex-row mt-44 space-y-6 md:space-y-0">
      <div className="w-full md:w-150">
        <span className="absolute blur bg-linear-to-b from-moon/20 to-moon-light/20 bg-clip-text text-transparent text-5xl font-semibold">
          Projects
        </span>
        <h3 className="relative bg-linear-to-b from-moon to-moon-light bg-clip-text text-transparent text-5xl font-semibold">
          Projects
        </h3>
      </div>
      <div className="md:w-170 flex flex-col gap-16 md:gap-4 md:shrink-0">
        {projectCards}
        <div>View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
      </div>
    </section>
  )
}

export default ProjectsSummary;
