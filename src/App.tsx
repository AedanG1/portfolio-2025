import { Routes, Route, useLocation } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import { AnimatePresence } from "motion/react"
import PageWrapper from "./components/Layout/PageWrapper"
import ProjectsPage from "./components/Projects/ProjectsPage"
import BjjvsPage from "./components/Projects/BjjvsPage"
import PaliaSchedulerPage from "./components/Projects/PaliaSchedulerPage"
import MeshChatPage from "./components/Projects/MeshChatPage"

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
              <ProjectsPage />
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
              <MeshChatPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
      </Route>
    </Routes>
  )
}

export default App
