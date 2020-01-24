import React from "react";
import { Link } from "react-scroll";

// setting duration for the scroll speed
const Header = ({ duration, offset, showNavigation }) => {
  let styleClasses = showNavigation
    ? "navbar navbar-dark bg-primary"
    : "hidden";
  return (
    <nav className={styleClasses}>
      <ul className="navbar__desktop">
        <Link
          to="AboutMe"
          spy={true}
          smooth={true}
          offset={offset}
          duration={duration}
        >
          <li>
            <h4>About Me</h4>
          </li>
        </Link>

        <Link
          to="Experience"
          spy={true}
          smooth={true}
          offset={offset}
          duration={duration}
        >
          <li>
            <h4>Experience</h4>
          </li>
        </Link>

        <Link
          to="Portfolio"
          spy={true}
          smooth={true}
          offset={offset}
          duration={duration}
        >
          <li>
            <h4>Portfolio</h4>
          </li>
        </Link>

        <Link
          to="ContactMe"
          spy={true}
          smooth={true}
          offset={offset}
          duration={duration}
        >
          <li>
            <h4>Contact-Me</h4>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
