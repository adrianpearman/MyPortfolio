import { useEffect, useRef, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
  AboutMe,
  Experiences,
  MainLanding,
  Projects,
} from "@/components/sections";
import { Footer, Navigation } from "@/components/base";
import { MainContext } from "@/components/context";
import { SEOComponent } from "@/components/helper";

export const App = () => {
  const navBar = useRef<HTMLElement>(null);
  const [offsetHeight, setOffsetHeight] = useState<number>();
  const [showNavigation, setShowNavigation] = useState(false);

  // Show the nav once the user scrolls past the landing section
  useEffect(() => {
    const onScroll = () =>
      setShowNavigation(window.scrollY > window.innerHeight - 75);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Offset scroll targets by the nav height so it doesn't cover section headers
  useEffect(() => {
    if (navBar.current) setOffsetHeight(navBar.current.offsetHeight);
  }, []);

  return (
    <HelmetProvider>
      <SEOComponent />
      <MainContext>
        <MainLanding offsetHeight={offsetHeight} />
        <Navigation
          offsetHeight={offsetHeight}
          ref={navBar}
          showNav={showNavigation}
        />
        <AboutMe />
        <Experiences />
        <Projects />
        <Footer />
      </MainContext>
    </HelmetProvider>
  );
};
