import { useEffect, useRef } from "react";

type StarfieldProps = {
  starCount?: number;
};

const Starfield = ({ starCount = 80 }: StarfieldProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement("div");

      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 2 + 1;

      star.className = `star`;
      star.style.left = `${x}vw`;
      star.style.top = `${y}vh`;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      container.appendChild(star);
    }

    return () => {
      container.replaceChildren();
    };
  }, [starCount]);

  return (
    <>
      <svg style={{ display: "none" }} aria-hidden="true"></svg>
      <div ref={containerRef} className="star-layer" aria-hidden="true" />
    </>
  );
};

export default Starfield;
