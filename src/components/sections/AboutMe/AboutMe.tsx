import { FlipCard, SectionComponent, SectionHeader } from "@/components/helper";
import {
  FlippedImage,
  LanguageContainer,
  ProfileTextReveal,
  UnFlippedImage,
} from "@/components/sections/AboutMe/components";

export const AboutMe = () => {
  return (
    <SectionComponent className="aboutMe bg-linear-to-b from-background-primary to-background-secondary justify-center align-top relative">
      <div className="flex flex-col h-full w-4/5 max-w-325 align-center justify-center gap-6 pb-12">
        <SectionHeader content="About Me" showAnimation={true} />
        <div className="flex justify-evenly gap-2 mt-8">
          <div className="basis-2/5 max-w-100">
            <FlipCard
              baseComponent={<UnFlippedImage />}
              flippedComponent={<FlippedImage />}
            />
          </div>
          <div className="pl-3 basis-1/2 flex flex-col gap-4 z-10">
            <ProfileTextReveal />
            <LanguageContainer />
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1/5 w-full bg-linear-to-b from-transparent to-background-secondary"
        aria-hidden
      ></div>
    </SectionComponent>
  );
};
