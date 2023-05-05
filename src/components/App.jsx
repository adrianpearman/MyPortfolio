// NPM Modules
import { useEffect, useRef, useState } from "react";
import { Element, scroller } from "react-scroll";
import { HelmetProvider } from "react-helmet-async";
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

const App = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [offsetHeight, setOffsetHeight] = useState(null);
  const navBar = useRef(null);

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

  useEffect(() => {
    const condition = navBar !== undefined && navBar.current !== null;
    condition && setOffsetHeight(navBar.current.offsetHeight);
  }, [navBar]);

  return (
    <HelmetProvider>
      <SEOComponent />
      <MainContext>
        <Navigation
          offsetHeight={offsetHeight}
          ref={navBar}
          showNav={showNavigation}
        />
        <Header offsetHeight={offsetHeight} />
        <Element name="AboutMe">
          <AboutMe offsetHeight={offsetHeight} />
        </Element>
        <Element name="Experience">
          <Experience />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="ContactForm">
          <ContactForm />
        </Element>
        <Footer />
      </MainContext>
    </HelmetProvider>
  );
};

export default App;
