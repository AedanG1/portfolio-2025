import ContentListItem from "./ContentListItem";
import { Heading } from "./extractContentHeadings";
import { JSX } from "react";

type ProjectAsideProps = {
  headings: Array<Heading>;
  asideRedirectButton: JSX.Element;
}

const ProjectAside = ({headings, asideRedirectButton}: ProjectAsideProps) => {

  const contentListItems = headings.map(({ label, depth, htmlId }) => (
    <ContentListItem key={htmlId} label={label} depth={depth} htmlId={htmlId} />
  ));

  const BOLT_POSITIONS = ["tl", "tr", "bl", "br"] as const;

  return (
    <aside className="hidden md:block w-70 sticky top-42 self-start py-6 px-2 frame-bg frame-border shrink-0">

      {BOLT_POSITIONS.map((position) => {
        return (
          <span aria-hidden="true" className={`frame-bolt frame-bolt__${position}`} />
        )
      })}

      <div className="flex flex-col gap-8 frame-inner-bg py-4 px-4">
        <div className="space-y-4 m-0">
          <h2 className="text-2xl font-worn text-body-normal">View Project</h2>
          {asideRedirectButton}
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
