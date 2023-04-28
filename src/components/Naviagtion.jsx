// NPM Modules
import { forwardRef } from "react";
// Components
import HelperLinkScroll from "./HelperComponents/HelperLinkScroll";

const Navigation = forwardRef(({ offsetHeight, showNav }, ref) => {
  const hidden = { opacity: 0 }
  const show = { opacity: 100 }
  const showStyle = showNav === true ? show : hidden

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
              height={offsetHeight + 40}
            />
          </li>
          <li>
            <HelperLinkScroll 
              scrollToElement="Projects"
              linkName="Projects"
              height={offsetHeight - 40}
            />
          </li>
          <li>
            <HelperLinkScroll 
              scrollToElement="ContactForm"
              linkName="Contact Me"
              height={offsetHeight - 40}
            />
          </li>
        </ul>
      </nav>
  )
})

export default Navigation;