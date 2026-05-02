import GitHubActivityTicker from "./GitHubActivityTicker";
import SpaceshipNavButton from "./SpaceshipNavButton";
import SpaceshipRedirectButton from "./SpaceshipRedirectButton";

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
    <div className="fixed w-full max-w-7xl mx-auto z-50 top-0 left-0 right-0 mt-24 py-2 px-2 
    bg-linear-to-b from-frame-light via-frame-mid via-45% to-frame-dark
    rounded-sm border-2 border-t-frame-border-t border-l-frame-border-l border-r-frame-border-r border-b-frame-border-b">

      {/* left rail */}
      <span aria-hidden="true" className="frame-rail frame-rail__left"/>

      {/* right rail */}
      <span aria-hidden="true" className="frame-rail frame-rail__right"/>

      {/* bolts */}
      {BOLT_POSITIONS.map(( position ) => {
        return (
          <span aria-hidden="true" className={`frame-bolt frame-bolt__${position}`}/>
        )
      })}

      <nav className="flex flex-row gap-8 items-center 
      bg-nav-bg-inner py-2 px-4 inset-shadow-dark">
        <GitHubActivityTicker />
        <div className="flex flex-row gap-2 mx-auto md:ml-auto shrink-0">
          <SpaceshipNavButton text="HOME" route="/"/>
          <SpaceshipNavButton text="PROJECTS" route="/projects"/>
          <div className="flex flex-col gap-0.75 justify-center mx-4">
            {vents}
          </div>
          <SpaceshipRedirectButton type="github"/>
          <SpaceshipRedirectButton type="linkedin"/>
          <SpaceshipRedirectButton type="resume"/>
        </div>
      </nav>
    </div>
  )
}

export default SpaceshipNav;