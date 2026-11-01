import {
  MainLanding,
  AboutMe,
  Experience,
  Projects,
  Footer,
} from "@/components/sections";

const App = () => {
  return (
    <div className="flex flex-col bg-background-secondary min-h-screen">
      <MainLanding />
      <div className="flex flex-col gap-2 w-full max-w-350 items-center justify-center mx-auto p-14">
        <AboutMe />
        <Projects />
        <Experience />
      </div>
      <Footer className="px-14" />
    </div>
  );
};

export default App;
