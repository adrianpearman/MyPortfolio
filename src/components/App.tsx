import {
  MainLanding,
  AboutMe,
  Experience,
  TechStack,
  Footer,
} from "@/components/sections";

const App = () => {
  return (
    <div className="flex flex-col bg-background-secondary min-h-screen">
      <MainLanding />
      <div className="flex flex-col w-full max-w-350 items-center justify-center mx-auto p-14">
        <AboutMe />
        <Experience />
        <TechStack />
      </div>
      <Footer className="px-14" />
    </div>
  );
};

export default App;
