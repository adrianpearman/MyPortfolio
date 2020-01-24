import React from "react";
import { Link } from "react-scroll";
import landingImage from "../assets/images/HeaderBackground2.jpg";

const style = {
  backgroundImage: `url(${landingImage})`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  height: "100vh",
  zIndex: 3,
  opacity: 0.9
};

const offset = -50;

const Landing = () => {
  return (
    <div className="landing">
      <div style={style}>
        <div className="landing-content">
          <h1 className="landing-title">Welcome</h1>
          <div className="landing-container-bar"></div>
          <h2 className="landing-subtitle landing-subtitle--animated">
            <Link
              activeClass="active"
              to="AboutMe"
              spy={true}
              smooth={true}
              offset={offset}
              duration={500}
            >
              Let's Collaborate
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Landing;
