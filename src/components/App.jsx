// NPM Modules
import { useEffect, useRef, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

// Context Component
import MainContext from "./context/MainContext";
// Components
import SEOComponent from "./HelperComponents/SEOComponent";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Naviagtion";
import Projects from "./Projects";
import ProjectModal from "./HelperComponents/ProjectModal";

const App = () => {
  // Ref
  const navBar = useRef(null);
  // State
  const [offsetHeight, setOffsetHeight] = useState(null);
  const [selectedProject, setSelectedProject] = useState({});
  const [showNavigation, setShowNavigation] = useState(false);
  const [showProjectModal, setShowProjectModal] = useState(false);
  // Functions
  const handleCloseModal = () => setShowProjectModal(false);
  const handleOpenModal = () => setShowProjectModal(true);

  // Show Navigation Hook
  useEffect(() => {
    const onScroll = () => {
      const headerHeight = window.innerHeight - 75;
      let userWindow = window.scrollY;
      userWindow > headerHeight
        ? setShowNavigation(true)
        : setShowNavigation(false);
    };
    window.addEventListener("scroll", onScroll);
  }, []);
  // Setting Scroll Offset Hook
  useEffect(() => {
    const condition = navBar !== undefined && navBar.current !== null;
    condition && setOffsetHeight(navBar.current.offsetHeight);
  }, [navBar]);

  console.log(selectedProject, showProjectModal);

  return (
    <HelmetProvider>
      <SEOComponent />
      <MainContext>
        <Header offsetHeight={offsetHeight} />
        <Navigation
          offsetHeight={offsetHeight}
          ref={navBar}
          showNav={showNavigation}
        />
        <AboutMe offsetHeight={offsetHeight} />
        <Experience />
        <Projects
          offsetHeight={offsetHeight}
          setSelectedProject={setSelectedProject}
          setShowProjectModal={setShowProjectModal}
          showProjectModal={showProjectModal}
        />
        <AnimatePresence initial={false} mode="wait">
          {showProjectModal ? (
            <ProjectModal
              handleClose={
                showProjectModal ? handleCloseModal : handleOpenModal
              }
              selectedProject={selectedProject}
            />
          ) : null}
        </AnimatePresence>
        <ContactForm />
        <Footer />
      </MainContext>
    </HelmetProvider>
  );
};

export default App;
