import { Routes, Route, useLocation } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import { AnimatePresence } from "motion/react"
import PageWrapper from "./components/Layout/PageWrapper"
import ProjectsGridPage from "./components/Projects/ProjectsGridPage.tsx"
import BjjvsPage from "./components/Projects/BjjvsPage"
import PaliaSchedulerPage from "./components/Projects/PaliaSchedulerPage"
import MeshChatArticle from "./components/Projects/MeshChatArticle"
import { projects } from "./data/projects"
import SpaceshipRedirectButton from "./components/SpaceshipRedirectButton"
import Icons from "@assets/Icons/Icons"
import ProjectPage from "./components/Projects/ProjectPage.tsx"

function App() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route element={<Layout />}>
        <Route path="/" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <Home />
            </PageWrapper>
          </AnimatePresence>
          }/>
        <Route path="/projects" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <ProjectsGridPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/projects/bjjvs" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <BjjvsPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/projects/paliascheduler" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <PaliaSchedulerPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/projects/meshchat" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <ProjectPage 
                meta={projects[0]}
                article={<MeshChatArticle />}
                articleRedirectButton={
                  <SpaceshipRedirectButton
                    text="View on GitHub"
                    shape="default"
                    style="blue-gradient inline-flex md:hidden"
                    icon={Icons.ArrowTopRight("size-4")}
                    url="https://github.com/AedanG1/mesh-chat"
                  />
                }
                asideRedirectButton={
                  <SpaceshipRedirectButton
                    text="View on GitHub"
                    shape="default"
                    style="blue-gradient inline-flex"
                    icon={Icons.ArrowTopRight("size-4")}
                    url="https://github.com/AedanG1/mesh-chat"
                  />
                }
              />
            </PageWrapper>
          </AnimatePresence>
        }/>
      </Route>
    </Routes>
  )
}

export default App
