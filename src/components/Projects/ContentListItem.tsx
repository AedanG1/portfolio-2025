import Icons from "@assets/Icons/Icons";

type ContentListItemProps = {
  label: string;
  depth: 0 | 1;
  htmlId: string;
  currentHeader: string;
}

const ContentListItem = ({label, depth, htmlId, currentHeader}: ContentListItemProps) => {

  const depthStyles = {
    0: "",
    1: "ml-5"
  };

  return (
    <li className={`flex flex-row items-center gap-2 ${depthStyles[depth]}`}>
      {Icons.StatusLed(`${htmlId === currentHeader ? "active" : "inactive"}`)}
      <a
        href={htmlId}
        className="transition duration-200 hover:text-sky-400/80"
      >
        {label}
      </a>
    </li>
  )
}

export default ContentListItem;
