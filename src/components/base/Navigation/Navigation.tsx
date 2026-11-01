import type { Ref } from "react";
import { LinkScroll } from "@/components/helper";

type TNavigationProps = {
  offsetHeight?: number;
  ref?: Ref<HTMLElement>;
  showNav?: boolean;
};

export const Navigation = ({
  offsetHeight,
  ref,
  showNav = false,
}: TNavigationProps) => {
  return (
    <nav style={{ opacity: showNav ? 1 : 0 }} ref={ref}>
      <ul className="flex">
        <li>
          <LinkScroll
            height={offsetHeight}
            linkName="About Me"
            scrollToElement="aboutMe"
          />
        </li>
        <li>
          <LinkScroll
            height={offsetHeight}
            linkName="Experience"
            scrollToElement="experience"
          />
        </li>
        <li>
          <LinkScroll
            height={offsetHeight}
            linkName="Projects"
            scrollToElement="projects"
          />
        </li>
        <li>
          <LinkScroll
            height={offsetHeight}
            linkName="Contact Me"
            scrollToElement="contactForm"
          />
        </li>
      </ul>
    </nav>
  );
};
