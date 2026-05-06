import GitHubActivityTicker from "./GitHubActivityTicker";
import SpaceshipNavButton from "./SpaceshipNavButton";
import SpaceshipRedirectButton from "./SpaceshipRedirectButton";
import Icons from "@assets/Icons/Icons";

const SpaceshipNav = () => {

  const VENT_AMOUNT = 5;
  const vents = []
  for (let i = 0; i < VENT_AMOUNT + 1; i++) {
    vents.push(
      <span key={i} className="block w-4 h-0.5 bg-[#141414] border-t border-b border-t-[#252525] border-b-[#616161]" />
    )
  }

  const BOLT_POSITIONS = ["tl", "tr", "bl", "br", "tm", "bm"] as const;

  return (
    <div className="fixed w-full max-w-7xl mx-auto z-50 top-0 left-0 right-0 mt-4 py-2 px-2 md:px-8 frame-bg frame-border">

      {/* left rail */}
      <span aria-hidden="true" className="frame-rail frame-rail__left" />

      {/* right rail */}
      <span aria-hidden="true" className="frame-rail frame-rail__right" />

      {/* bolts */}
      {BOLT_POSITIONS.map((position) => {
        return (
          <span key={position} aria-hidden="true" className={`frame-bolt frame-bolt__${position}`} />
        )
      })}

      <nav className="flex flex-row gap-8 items-center py-2 px-4 frame-inner-bg">
        <GitHubActivityTicker />
        <div className="flex flex-row gap-2 mx-auto md:ml-auto shrink-0">
          <SpaceshipNavButton text="HOME" route="/" />
          <SpaceshipNavButton text="PROJECTS" route="/projects" />

          <div className="flex flex-col gap-0.75 justify-center mx-4">
            {vents}
          </div>

          <SpaceshipRedirectButton
            text=""
            style="gray-gradient"
            shape="circle"
            icon={Icons.GitHub("size-6", "#FFFFFF")}
            url="https://github.com/AedanG1"
          />
          <SpaceshipRedirectButton
            text=""
            style="gray-gradient"
            shape="circle"
            icon={Icons.Linkedin("size-6", "#FFFFFF")}
            url="https://linkedin.com/in/aedan-gallivan"
          />
          <SpaceshipRedirectButton
            text="Resumé"
            style="orange-gradient text-orange-normal"
            shape="default"
            icon={Icons.ArrowTopRight("size-4")}
            url="/Aedan_Gallivan_Resume.pdf"
          />
        </div>
      </nav>
    </div>
  )
}

export default SpaceshipNav;
