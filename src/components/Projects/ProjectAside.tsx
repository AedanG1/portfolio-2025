import { useEffect, useState } from "react";
import { Project } from "../../data/projects";
import SpaceshipRedirectButton from "../SpaceshipRedirectButton";
import ContentListItem from "./ContentListItem";
import { Heading } from "./extractContentHeadings";
import Icons from "@assets/Icons/Icons";

type ProjectAsideProps = {
  headings: Array<Heading>;
  meta: Project;
}

const BOLT_POSITIONS = ["tl", "tr", "bl", "br"] as const;

const ProjectAside = ({ headings, meta }: ProjectAsideProps) => {
  const [currentHeader, setCurrentHeader] = useState<string>("");

  useEffect(() => {
    const elements = headings.map(header => document.getElementById(header.htmlId.slice(1)))
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentHeader(`#${entry.target.id}`);
        }
      });
    }, { rootMargin: "-40% 0px -59% 0px" });

    elements.forEach((e) => e && observer.observe(e));

    return () => observer.disconnect();
  }, [headings])

  const redirectText = meta.liveUrl ? "View Live" : "View on GitHub";

  const contentListItems = headings.map(({ label, depth, htmlId }) => (
    <ContentListItem key={htmlId} label={label} depth={depth} htmlId={htmlId} currentHeader={currentHeader} />
  ));

  return (
    <aside className="hidden md:block w-70 sticky top-42 self-start py-6 px-2 frame-bg frame-border shrink-0">

      {BOLT_POSITIONS.map((position) => {
        return (
          <span key={position} aria-hidden="true" className={`frame-bolt frame-bolt__${position}`} />
        )
      })}

      <div className="flex flex-col gap-8 frame-inner-bg py-4 px-4">
        <div className="space-y-4 m-0">
          <h2 className="text-2xl font-worn text-body-normal">View Project</h2>
          <SpaceshipRedirectButton
            text={redirectText}
            style="blue-gradient inline-flex"
            shape="default"
            icon={Icons.ArrowTopRight("size-4")}
            url={meta.liveUrl ? meta.liveUrl : meta.githubUrl}
          />
        </div>
        <div>
          <h2 className="text-2xl mb-2 font-worn text-body-normal">Contents</h2>
          <ul className="text-sm font-worn space-y-2 text-body-muted">
            {contentListItems}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default ProjectAside;
