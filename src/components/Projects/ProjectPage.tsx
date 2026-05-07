import ProjectAside from "./ProjectAside";
import { JSX } from "react";
import extractContentHeadings from "./extractContentHeadings";
import { Project } from "../../data/projects";
import SpaceshipRedirectButton from "../SpaceshipRedirectButton";
import Icons from "@assets/Icons/Icons";

type ProjectPageProps = {
  meta: Project;
  article: JSX.Element;
}

const ProjectPage = ({meta, article}: ProjectPageProps) => {
  const headings = extractContentHeadings(article);

  const redirectText = meta.liveUrl ? "View Live" : "View on GitHub";

  const techStack = meta.stackArr.map((item, i) => (
    <li key={item} className="text-sm">
      {item}
      {i < meta.stackArr.length - 1 &&
        <span className="pl-2 pr-1">·</span>
      }
    </li>
  ));

  return (
    <main className="space-y-20 scroll-smooth">
      <div className="flex flex-col-reverse md:flex-row gap-20">
        <div className="basis-3/4 space-y-8 pb-110">
          <header className="space-y-2">
            <img
              src={meta.img}
              loading="lazy"
              alt={meta.alt}
            />
            <div className="flex flex-row justify-between">
              <div className="space-y-2">
                <p>{meta.dateType}</p>
                <h1 className="text-4xl font-semibold w-full">{meta.title}</h1>
                <ul className="flex flex-row gap-1 flex-wrap text-sm text-body-muted">{techStack}</ul>
              </div>
              <SpaceshipRedirectButton 
                text={redirectText} 
                style="blue-gradient inline-flex md:hidden"
                shape="default"
                icon={Icons.ArrowTopRight("size-4")}
                url={meta.liveUrl ? meta.liveUrl : meta.githubUrl}
              />
            </div>
          </header>

          {/* Article content */}
          {article}
        </div>

        <ProjectAside headings={headings} meta={meta} />

      </div>
    </main>
  );
};

export default ProjectPage;
