import React from "react";
import { Link } from "react-scroll";

// setting duration for the scroll speed
const Header = ({ duration, offset, showNavigation }) => {
  let styleClasses = showNavigation
    ? "navbar navbar-dark bg-primary"
    : "hidden";
  return (
    <nav className={styleClasses} role="navigation">
      <ul className="navbar__desktop">
        <li>
          <Link
            to="AboutMe"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            <p>About Me</p>
          </Link>
        </li>
        <li>
          <Link
            to="Experience"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            <p>Experience</p>
          </Link>
        </li>
        <li>
          <Link
            to="Portfolio"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            <p>Portfolio</p>
          </Link>
        </li>
        <li>
          <Link
            to="ContactMe"
            spy={true}
            smooth={true}
            offset={offset}
            duration={duration}
          >
            <p>Contact-Me</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
