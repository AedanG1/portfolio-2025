type Project = {
  title: string;
  date: number;
  type: string;
  stack: string[];
  description: string;
  liveUrl: string | null;
  githubUrl: string | null;
}

export const projects: Project[] = [
  {
    title: "Video Coaching Platform",
    date: 2025,
    type: "personal project",
    stack: ["React", "Express.js", "PostgreSQL", "AWS"],
    description: "A video sharing app where Admins can upload videos for users to watch and favorite. Filter by tags to find specific videos by topic.",
    liveUrl: "",
    githubUrl: "https://github.com/AedanG1/bjjvs-app"
  },
  {
    title: "Palia Scheduler",
    date: 2026,
    type: "personal project",
    stack: ["Next.js", "Python", "Vitest"],
    description: "A video sharing app where Admins can upload videos for users to watch and favorite. Filter by tags to find specific videos by topic.",
    liveUrl: "https://paliascheduler.com",
    githubUrl: "https://github.com/AedanG1/palia-scheduler"
  },
  {
    title: "Mesh Chat",
    date: 2026,
    type: "personal project",
    stack: ["React", "Express.js", "SQLite3", "WebSockets", "WebCrypto"],
    description: "An End-to-End Encrypted chat app with an n-to-n mesh server topology.",
    liveUrl: "",
    githubUrl: "https://github.com/AedanG1/mesh-chat"
  }
]
