import { BaseCell, FadeInView } from "@/components/reuseable";
import {
  ExperienceList,
  TechStack,
} from "@/components/sections/Experience/components";

export const Experience = () => {
  return (
    <section className="w-full" id="experience">
      <FadeInView className="flex gap-2 max-lg:flex-wrap ">
        <BaseCell className="w-3/4 max-lg:w-full">
          <ExperienceList />
        </BaseCell>
        <BaseCell className="w-1/4 max-lg:w-full max-lg:min-h-52">
          <TechStack />
        </BaseCell>
      </FadeInView>
    </section>
  );
};
