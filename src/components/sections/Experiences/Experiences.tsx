import { SectionComponent, SectionHeader } from "@/components/helper";
import { Timeline } from "@/components/vendor";
import { EXPERIENCE_DATA } from "@/data";

export const Experiences = () => {
  return (
    <SectionComponent className="experience h-auto! bg-linear-to-b from-background-secondary to-background-tertiary justify-center align-top relative">
      <div className="flex flex-col h-full w-4/5 max-w-325 align-center justify-center gap-6 pb-12">
        <SectionHeader content="Experiences" showAnimation={true} />
        <div className="flex">
          <Timeline data={EXPERIENCE_DATA} />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1/5 w-full bg-linear-to-b from-transparent to-background-tertiary"
        aria-hidden
      ></div>
    </SectionComponent>
  );
};
