import { BaseCell } from "@/components/reuseable";

import {
  AboutMeCallToActions,
  AboutMeContent,
  ProfileFlipCard,
} from "@/components/sections/AboutMe/components";

export const AboutMe = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="w-1/2">
        <AboutMeContent />
      </BaseCell>
      <BaseCell className="w-1/4 bg-transparent">
        <ProfileFlipCard />
      </BaseCell>
      <BaseCell className="w-1/4">
        <AboutMeCallToActions />
      </BaseCell>
    </section>
  );
};
