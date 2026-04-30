import SkillSummary from "./SkillSummary";
import ProjectsSummary from "./ProjectsSummary";
import Icons from "../Icons/Icons";

const Home = () => {
  return (
    <section className="space-y-24">
      <header className="flex md:flex-row">
        <div className="md:w-1/2">
          <h1 className="text-3xl text-body-normal">
            Aedan Gallivan
          </h1>
          <span className="absolute blur bg-linear-to-b from-moon/30 to-moon-light/30 bg-clip-text text-transparent text-5xl font-semibold py-2">
            Full-Stack Developer<br></br>& Designer
          </span>
          <h2 className="relative bg-linear-to-b from-moon to-moon-light bg-clip-text text-transparent text-5xl font-semibold py-2">
            Full-Stack Developer<br></br>& Designer
          </h2>
          <p className="text-md mt-4">
            With a background in Product Design I take products from ideas to
            deployment, prioritizing user experience on the front end and clean,
            readable code throughout.
          </p>
          <div className="mt-8">
            <a
              className="px-4 py-2 bg-white/5 backdrop-blur-xs border border-slate-400 inline-flex items-center gap-2"
              href="Aedan_Gallivan_Resume.pdf"
              target="_blank"
            >
              View Resumé <span>{Icons.ArrowTopRight("size-4")}</span>
            </a>
          </div>
        </div>
      </header>
      <SkillSummary />
      <ProjectsSummary />
    </section>
  );
};

export default Home;
