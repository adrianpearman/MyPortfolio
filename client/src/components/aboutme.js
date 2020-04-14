import React from "react";
import { Link } from "react-scroll";
import profilePhoto from "../assets/images/profilePhoto.jpg";

const AboutMe = props => {
  const duration = props.duration;
  const offset = props.offset;
  return (
    <div className="about-me">
      <div className="row mb-3">
        <div className="section__title first col-12">
          <h1>
            About Me <span className="emphasize">/</span>
          </h1>
        </div>
      </div>
      <div className="row">
        <div className="about-me__photo--container col-md-6 col-sm-12">
          <img className="about-me__image" src={profilePhoto} alt="" />
          <div className="about-me__triangle"></div>
        </div>
        <div className="about-me__description col-md-6 col-sm-12">
          <div className="about-me__container">
            <p>
              I’m a Full-Stack Web Developer based in Toronto, Ontario, Canada.
              Creating the best possible product is my goal as a developer; and
              with that in mind, my objective is to help{" "}
              <span className="emphasize">YOU</span> create the best product
              possible for any and all of{" "}
              <span className="emphasize">YOUR</span> needs! <br /> When it
              comes to your needs, deadlines and working hours are pliable as
              needed. I’m also flexible when it comes to working arrangements
              whether its solo or in a working group environment.
            </p>
            <div className="contact-container mt-5">
              <div className="row">
                <div className="col-4 mb-3">
                  <a
                    href="https://www.linkedin.com/in/adrian-pearman/"
                    target="_blank"
                    alt="Link to Adrian Pearman's professional LinkedIn profile"
                    rel="noopener noreferrer"
                  >
                    <button className="contact__me contact__me--linkedin">
                      Linkedin
                    </button>
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <a
                    href="https://github.com/adrianpearman"
                    target="_blank"
                    alt="Link to Adrian Pearman's Github profile"
                    rel="noopener noreferrer"
                  >
                    <button className="contact__me contact__me--github">
                      Github
                    </button>
                  </a>
                </div>
                <div className="col-4 mb-3">
                  <Link
                    to="ContactMe"
                    spy={true}
                    smooth={true}
                    offset={offset}
                    duration={duration}
                  >
                    <button className="contact__me contact__me--email">
                      E-Mail
                    </button>
                  </Link>
                </div>
              </div>
              <div className="contact-container-bar"></div>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default AboutMe;
