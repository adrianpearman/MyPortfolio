import { SectionComponent, SectionHeader } from "@/components/helper";
import { CurtainSlider } from "@/components/vendor";
import { DEFAULT_IMAGES } from "@/data";

export const Projects = () => {
  return (
    <SectionComponent className="projects bg-linear-to-b from-background-tertiary to-background-quaternary justify-center align-top max-h-dvh relative">
      <div className="flex flex-col w-4/5 py-4 gap-4">
        <SectionHeader content="Projects" showAnimation={true} />
        <div className="relative flex flex-1 min-h-0 min-w-0 overflow-hidden">
          <CurtainSlider data={DEFAULT_IMAGES} />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1/5 w-full bg-linear-to-b from-transparent to-background-quaternary"
        aria-hidden
      ></div>
    </SectionComponent>
  );
};
