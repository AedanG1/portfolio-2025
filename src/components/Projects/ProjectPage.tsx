import ProjectAside from "./ProjectAside";
import { JSX } from "react";
import extractContentHeadings from "./extractContentHeadings";
import { Project } from "../../data/projects";

type ProjectPageProps = {
  meta: Project;
  article: JSX.Element;
  articleRedirectButton: JSX.Element;
  asideRedirectButton: JSX.Element;
}

const ProjectPage = ({meta, article, articleRedirectButton, asideRedirectButton}: ProjectPageProps) => {
  const headings = extractContentHeadings(article);

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
              {articleRedirectButton}
            </div>
          </header>

          {/* Article content */}
          {article}
        </div>

        <ProjectAside headings={headings} asideRedirectButton={asideRedirectButton} />

      </div>
    </main>
  );
};

export default ProjectPage;
