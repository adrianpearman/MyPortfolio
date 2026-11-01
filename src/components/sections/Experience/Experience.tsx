import { BaseCell } from "@/components/reuseable";
import {
  ExperienceList,
  TechStack,
} from "@/components/sections/Experience/components";

export const Experience = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="w-3/4">
        <ExperienceList />
      </BaseCell>
      <BaseCell className="w-1/4">
        <TechStack />
      </BaseCell>
    </section>
  );
};
