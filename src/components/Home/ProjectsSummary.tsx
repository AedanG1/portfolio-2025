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
      <span className="absolute w-full md:w-4/6 blur bg-linear-to-b from-moon/20 to-moon-light/20 bg-clip-text text-transparent text-5xl font-semibold">
        Projects
      </span>
      <h3 className="relative w-full md:w-4/6 bg-linear-to-b from-moon to-moon-light bg-clip-text text-transparent text-5xl font-semibold">
        Projects
      </h3>
      <div className="w-full md:w-full flex flex-col gap-4">
        {projectCards}
        <div>View more of my projects on <a className="underline" target="blank" href="https://github.com/AedanG1">GitHub</a></div>
      </div>
    </section>
  )
}

export default ProjectsSummary;
