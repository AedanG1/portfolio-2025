import { JSX } from "react";
import { meshHero } from "@assets/meshchat";
import { paliaHero } from "@assets/paliascheduler";
import { bjjvsHero } from "@assets/bjjvs";
import MeshChatArticle from "../components/Projects/MeshChatArticle";
import PaliaSchedulerArticle from "../components/Projects/PaliaSchedulerArticle";
import BjjvsArticle from "../components/Projects/BjjvsArticle";

export type Project = {
  link: string;
  img: string;
  alt: string;
  dateType: string;
  title: string;
  stackArr: string[];
  desc: string;
  githubUrl: string;
  liveUrl: string;
  article: JSX.Element;
}

export const projects: Project[] = [
  {
    link: "/projects/meshchat",
    img: meshHero,
    alt: "A screenshot of the mesh topology of the mesh chat app",
    dateType: "2026 · personal project",
    title: "Mesh Chat",
    stackArr: [
      "Express.js",
      "React",
      "TypeScript",
      "WebSockets",
      "WebCrypto",
      "SQLite3",
    ],
    desc:"An End-to-End Encrypted chat app with an n-to-n mesh server topology.",
    githubUrl: "https://github.com/AedanG1/mesh-chat",
    liveUrl: "",
    article: <MeshChatArticle />
  },
  {
    link: "/projects/paliascheduler",
    img: paliaHero,
    alt: "A screenshot of the palia scheduler app",
    dateType: "2025 · personal project",
    title: "Palia Scheduler",
    stackArr: [
      "Next.js",
      "Tailwind",
      "Python",
      "Vitest"
    ],
    desc: "A scheduling app for Palia (videogame). Users can schedule in-game events and get notified when they're about to go live.",
    githubUrl: "",
    liveUrl: "https://paliascheduler.com",
    article: <PaliaSchedulerArticle />
  },
  {
    link: "/projects/bjjvs",
    img: bjjvsHero,
    alt: "A screenshot of a video sharing web app",
    dateType: "2025 · personal project",
    title: "Video Sharing Web App",
    stackArr: [
      "React",
      "Tailwind",
      "Express.js",
      "PostgreSQL",
      "AWS"
    ],
    desc: "A video sharing app where Admins can upload videos for users to watch and favorite. Filter by tags to find specific videos by topic.",
    githubUrl: "https://github.com/AedanG1/bjjvs-app",
    liveUrl: "",
    article: <BjjvsArticle />
  }
]
