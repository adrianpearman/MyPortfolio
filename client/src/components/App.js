// React Modules
import React, { useEffect } from "react";
import { Element } from "react-scroll";
// Redux
import { connect } from "react-redux";
import ACTIONS from "../redux/actions";
// Imported Components / Styling
import Header from "./header";
import Landing from "./landing";
import AboutMe from "./aboutme";
import Experience from "./experience";
import ContactMeForm from "./contact-me-form";
import Footer from "./footer";
import Portfolio from "./portfolio";
import "../assets/styles/styles.scss";

const App = ({
  duration,
  fetchExperience,
  fetchPortfolio,
  offset,
  showNavigation,
  toggleNavigation
}) => {
  useEffect(() => {
    const onScroll = () => {
      // records the height of where the setState will change
      const headerHeight = window.innerHeight - 75;
      // records current position on the page
      let userWindow = window.pageYOffset;
      // triggers function to change navigation bar
      userWindow > headerHeight
        ? toggleNavigation(true)
        : toggleNavigation(false);
    };
    window.addEventListener("scroll", onScroll);
    fetchExperience();
    fetchPortfolio();
  }, []);

  return (
    <div>
      <Landing />
      <Header
        showNavigation={showNavigation}
        offset={offset}
        duration={duration}
      />
      <div className="container">
        <Element name="AboutMe">
          <AboutMe offset={offset} duration={duration} />
        </Element>

        <Element name="Experience">
          <Experience />
        </Element>

        <Element name="Portfolio">
          <Portfolio />
        </Element>

        <Element name="ContactMe">
          <ContactMeForm />
        </Element>
      </div>
      <Footer offset={offset} duration={duration} />
    </div>
  );
};

const mapStateToProps = ({ uiReducer }) => {
  return uiReducer;
};

const mapDispatchToProps = {
  fetchEducation: ACTIONS.fetchEducation,
  fetchExperience: ACTIONS.fetchExperience,
  fetchPortfolio: ACTIONS.fetchPortfolio,
  toggleNavigation: ACTIONS.toggleNavigation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
