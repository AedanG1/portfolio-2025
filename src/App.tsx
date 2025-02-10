import { Routes, Route, useLocation } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import { AnimatePresence } from "motion/react"
import PageWrapper from "./components/Layout/PageWrapper"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import ProjectPage from "./components/Projects/ProjectPage"

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
              <Projects />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/projects/bjjvs" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <ProjectPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/contact" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <Contact />
            </PageWrapper>
          </AnimatePresence>
        }/>
      </Route>
    </Routes>
  )
}

export default App
