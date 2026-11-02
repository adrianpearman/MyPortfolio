import { useRef } from "react";
import { HelmetProvider } from "react-helmet-async";
import { PortfolioContext } from "@/components/context/PortfolioContext/PortfolioContext";
import {
  MainLanding,
  AboutMe,
  Experience,
  Projects,
  Footer,
} from "@/components/sections";
import { Navigation, SEOComponent } from "@/components/shared";

const App = () => {
  const mainComponentRef = useRef<HTMLDivElement>(null);
  return (
    <HelmetProvider>
      <SEOComponent />
      <PortfolioContext.Provider value={mainComponentRef}>
        <div
          className="flex flex-col bg-background-secondary min-h-screen relative"
          ref={mainComponentRef}
        >
          <Navigation />
          <MainLanding />
          <div className="flex flex-col gap-2 w-full max-w-350 items-center justify-center mx-auto px-10 py-3">
            <AboutMe />
            <Projects />
            <Experience />
          </div>
          <Footer />
        </div>
      </PortfolioContext.Provider>
    </HelmetProvider>
  );
};

export default App;
