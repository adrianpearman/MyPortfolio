// NPM Modules
import { forwardRef } from "react";
// Components
import HelperLinkScroll from "./HelperComponents/HelperLinkScroll";

const Navigation = forwardRef(({ offsetHeight, showNav }, ref) => {
  const showStyle = showNav === true ? { opacity: 1 } : { opacity: 0 };

  return (
    <nav style={showStyle} ref={ref}>
      <ul>
        <li>
          <HelperLinkScroll
            height={offsetHeight}
            linkName="About Me"
            scrollToElement="aboutMe"
          />
        </li>
        <li>
          <HelperLinkScroll
            height={offsetHeight}
            linkName="Experience"
            scrollToElement="experience"
          />
        </li>
        <li>
          <HelperLinkScroll
            height={offsetHeight}
            linkName="Projects"
            scrollToElement="projects"
          />
        </li>
        <li>
          <HelperLinkScroll
            height={offsetHeight}
            linkName="Contact Me"
            scrollToElement="contactForm"
          />
        </li>
      </ul>
    </nav>
  );
});

export default Navigation;
