import { LinkScroll, SectionComponent } from "@/components/helper";
import { TextScramble } from "@/components/vendor";

import landingImage from "@/assets/images/HeaderBackground2.png";

type TMainLandingProps = {
  offsetHeight?: number;
};

export const MainLanding = ({ offsetHeight }: TMainLandingProps) => {
  const style = {
    backgroundImage: `url(${landingImage})`,
  };

  return (
    <SectionComponent
      className="flex-col items-center justify-center relative bg-cover text-cream"
      sectionEl={false}
      style={style}
    >
      <div className="flex flex-col gap-3 h-1/2 items-center justify-evenly mx-0 my-auto text-center">
        <TextScramble
          className="text-cream text-main-landing font-main-heading"
          content="Welcome"
        />
        <h2 className="skew-x-[-20deg]">
          <LinkScroll
            className="font-main-heading bg-[linear-gradient(to_right,transparent_50%,#047F67_50%)] bg-size-[200%_100%] bg-left-bottom text-[5rem] tracking-[2px] pt-[15px] px-[25px] pb-[5px] uppercase transition-all duration-500 ease-in-out hover:bg-right-bottom focus:bg-right-bottom hover:bg-[#047F67] focus:bg-[#047F67] cursor-pointer text-section-sub-header"
            height={offsetHeight}
            linkName="Let's Collaborate"
            scrollToElement="aboutMe"
          />
        </h2>
      </div>
      <div
        className="absolute bottom-0 left-0 h-1/5 w-full bg-linear-to-b from-transparent to-cream"
        aria-hidden
      ></div>
    </SectionComponent>
  );
};
