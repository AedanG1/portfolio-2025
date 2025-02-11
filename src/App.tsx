import { Routes, Route, useLocation } from "react-router"
import Layout from "./components/Layout/Layout"
import Home from "./components/Home/Home"
import { AnimatePresence } from "motion/react"
import PageWrapper from "./components/Layout/PageWrapper"
import ProjectsGrid from "./components/Projects/ProjectsGrid"
import Contact from "./components/Contact/Contact"
import BjjvsPage from "./components/Projects/BjjvsPage"
import WelcomebookPage from "./components/Projects/WelcomebookPage"
import MoviewatchlistPage from "./components/Projects/MoviewatchlistPage"

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
              <ProjectsGrid />
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
        <Route path="/projects/welcomebook" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <WelcomebookPage />
            </PageWrapper>
          </AnimatePresence>
        }/>
        <Route path="/projects/moviewatchlist" element={
          <AnimatePresence mode="wait">
            <PageWrapper key={location.pathname}>
              <MoviewatchlistPage />
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
