import Icons from "@assets/Icons/Icons";

const ProjectAside = () => {
  return (
    <aside className="basis-1/4 md:sticky md:top-32 md:self-start space-y-8">
      <div className="space-y-2">
        <h2 className="text-2xl">View Project</h2>
        <a
          className="px-4 py-2 bg-sky-400/60 rounded-md text-white inline-flex gap-2 items-center"
          href="https://github.com/AedanG1/mesh-chat"
          target="/blank"
        >
          View on GitHub <span>{Icons.ArrowTopRight("size-4")}</span>
        </a>
      </div>
      <div className="space-y-2">
        <h2 className="text-2xl">Tech Stack</h2>
        <ul className="flex flex-row gap-1 flex-wrap">
          <li className="border border-neutral-400 px-2">Express.js</li>
          <li className="border border-neutral-400 px-2">React</li>
          <li className="border border-neutral-400 px-2">TypeScript</li>
          <li className="border border-neutral-400 px-2">WebSockets</li>
          <li className="border border-neutral-400 px-2">WebCrypto</li>
          <li className="border border-neutral-400 px-2">SQLite3</li>
        </ul>
      </div>
      <div className="hidden md:block">
        <h2 className="text-2xl mb-2">Contents</h2>
        <ul>
          <li>
            <a
              href="#overview"
              className="transition duration-200 hover:text-sky-400/80"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#development-approach"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Development Approach
            </a>
          </li>
          <li>
            <a
              href="#cryptography"
              className="transition duration-200 hover:text-sky-400/80"
            >
              Cryptography
            </a>
          </li>
          <li>
            <a
              href="#asymmetric-keys"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Asymmetric Keys
            </a>
          </li>
          <li>
            <a
              href="#e2e-encryption"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ End-to-End Encryption
            </a>
          </li>
          <li>
            <a
              href="#signatures"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Signatures
            </a>
          </li>
          <li>
            <a
              href="#registration&login"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Registration & Login
            </a>
          </li>
          <li>
            <a
              href="#managing-state"
              className="transition duration-200 hover:text-sky-400/80"
            >
              Managing State
            </a>
          </li>
          <li>
            <a
              href="#websockets"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ WebSockets
            </a>
          </li>
          <li>
            <a
              href="#in-memory-tables"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ In-memory Tables
            </a>
          </li>
          <li>
            <a
              href="#gossip"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Gossip
            </a>
          </li>
          <li>
            <a
              href="#avoiding-loops"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Avoiding Loops
            </a>
          </li>
          <li>
            <a
              href="#heartbeat"
              className="ml-6 transition duration-200 hover:text-sky-400/80"
            >
              ⌙ Heartbeat
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

export default ProjectAside;
