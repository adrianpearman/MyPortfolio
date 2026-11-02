import { BaseCell, FadeInView } from "@/components/reuseable";

import {
  AboutMeCallToActions,
  AboutMeContent,
  ProfileFlipCard,
} from "@/components/sections/AboutMe/components";

export const AboutMe = () => {
  return (
    <section className="w-full scroll-mt-12.5" id="about-me">
      <FadeInView className="flex gap-2">
        <BaseCell className="w-1/2">
          <AboutMeContent />
        </BaseCell>
        <BaseCell className="w-1/4 bg-transparent">
          <ProfileFlipCard />
        </BaseCell>
        <BaseCell className="w-1/4">
          <AboutMeCallToActions />
        </BaseCell>
      </FadeInView>
    </section>
  );
};
