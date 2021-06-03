import React from "react";
import { Link } from "react-scroll";

const Footer = ({ duration, offset }) => {
  return (
    <footer className="footer">
      <nav className="footer__nav" role="">
        <ul>
          <li className="linkedin">
            <a
              href="https://www.linkedin.com/in/adrian-pearman/"
              target="_blank"
              alt="Link to Adrian Pearman's professional LinkedIn profile"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className="github">
            <a
              href="https://github.com/adrianpearman"
              target="_blank"
              alt="Link to Adrian Pearman's Github profile"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <Link
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={offset}
              duration={duration}
            >
              About Me
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
              Experience
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
              Portfolio
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
              Contact-Me
            </Link>
          </li>
        </ul>
      </nav>
      <h3 className="footer__copyright">
        &copy; Adrian Pearman {new Date().getFullYear()}
      </h3>
    </footer>
  );
};

export default Footer;
