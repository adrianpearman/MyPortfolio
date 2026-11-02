import { HelmetProvider } from "react-helmet-async";
import {
  MainLanding,
  AboutMe,
  Experience,
  Projects,
  Footer,
} from "@/components/sections";
import { Navigation, SEOComponent } from "@/components/shared";

const App = () => {
  return (
    <HelmetProvider>
      <SEOComponent />
      <div className="flex flex-col bg-background-secondary min-h-screen">
        <Navigation />
        <MainLanding />
        <div className="flex flex-col gap-2 w-full max-w-350 items-center justify-center mx-auto px-10 py-3">
          <AboutMe />
          <Projects />
          <Experience />
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default App;
