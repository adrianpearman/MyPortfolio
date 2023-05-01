// NPM Modules
import { forwardRef } from "react";
// Components
import HelperLinkScroll from "./HelperComponents/HelperLinkScroll";

const Navigation = forwardRef(({ offsetHeight, showNav }, ref) => {
  const showStyle = showNav === true ? { opacity: 1 } : { opacity: 0 }

  return (
      <nav style={showStyle} ref={ref}>
        <ul>
          <li>
            <HelperLinkScroll 
              scrollToElement="AboutMe"
              linkName="About Me"
              height={offsetHeight}
            />
          </li>
          <li>
            <HelperLinkScroll 
              scrollToElement="Experience"
              linkName="Experience"
              height={offsetHeight}
            />
          </li>
          <li>
            <HelperLinkScroll 
              scrollToElement="Projects"
              linkName="Projects"
              height={offsetHeight}
            />
          </li>
          <li>
            <HelperLinkScroll 
              scrollToElement="ContactForm"
              linkName="Contact Me"
              height={offsetHeight}
            />
          </li>
        </ul>
      </nav>
  )
})

export default Navigation;