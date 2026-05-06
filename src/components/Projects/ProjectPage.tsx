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

  return (
    <main className="space-y-20">
      <div className="flex flex-col-reverse md:flex-row gap-20">
        <div className="basis-3/4 space-y-8 pb-110">
          <header className="space-y-2">
            <img
              src={meta.img}
              loading="lazy"
              alt={meta.alt}
            />
            <div className="flex flex-row justify-between">
              <div>
                <h1 className="text-4xl font-semibold w-full">{meta.title}</h1>
                <p>{meta.dateType}</p>
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
