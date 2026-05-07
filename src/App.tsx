import { Routes, Route, useLocation } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import { AnimatePresence } from "motion/react"
import PageWrapper from "./components/Layout/PageWrapper"
import ProjectsGridPage from "./components/Projects/ProjectsGridPage.tsx"
import { projects } from "./data/projects"
import ProjectPage from "./components/Projects/ProjectPage.tsx"

function App() {
  const location = useLocation();

  const projectPages = projects.map(
    (project) => {
      return (
        <Route path={project.link} element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <ProjectPage 
                meta={project}
                article={project.article}
              />
            </PageWrapper>
          </AnimatePresence>
        }/>
      )
    }
  )

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
        {projectPages}
      </Route>
    </Routes>
  )
}

export default App
