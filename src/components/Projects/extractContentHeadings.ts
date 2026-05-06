import { Children, isValidElement, JSX } from "react";

export type Heading = {
  label: string;
  depth: 0 | 1;
  htmlId: string;
}

const extractContentHeadings = (element: JSX.Element): Heading[] => {
  const headings: Heading[] = [];

  const traverse = (el: unknown) => {
    if (!isValidElement(el)) return;

    const { type, props } = el as JSX.Element & { props: { id?: string; children?: React.ReactNode } };

    if (type === "h2" || type === "h3") {
      if (props.id) {
        headings.push({
          label: Children.toArray(props.children).join("").trim(),
          depth: (type === "h2" ? 0 : 1) as 0 | 1,
          htmlId: `#${props.id}`,
        });
      }
    } else if (typeof type === "function") {
      traverse((type as (props: unknown) => JSX.Element)(props));
    }

    Children.forEach(props.children as React.ReactNode, traverse);
  };

  traverse(element);
  return headings;
};

export default extractContentHeadings;
