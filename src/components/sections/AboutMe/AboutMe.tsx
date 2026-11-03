import { BaseCell, FadeInView } from "@/components/reuseable";

import {
  AboutMeCallToActions,
  AboutMeContent,
  ProfileFlipCard,
} from "@/components/sections/AboutMe/components";

export const AboutMe = () => {
  return (
    <section className="w-full scroll-mt-12.5" id="about-me">
      <FadeInView className="flex gap-2 max-xs:flex-wrap">
        <BaseCell className="w-1/2 max-md:w-2/3 max-xs:w-full">
          <AboutMeContent />
        </BaseCell>
        <BaseCell className="w-1/4 bg-transparent max-md:hidden">
          <ProfileFlipCard />
        </BaseCell>
        <BaseCell className="w-1/4 max-md:w-1/3 max-xs:w-full max-xs:min-h-60">
          <AboutMeCallToActions />
        </BaseCell>
      </FadeInView>
    </section>
  );
};
