// React Modules
import React, { Component } from "react";
import { Element } from "react-scroll";

// Redux
import { connect } from "react-redux";
import {
  fetchEducation,
  fetchExperience,
  fetchPortfolio,
  toggleNavigation
} from "../redux/actions";

// Imported Components / Styling
import Header from "./header";
import Landing from "./landing";
import AboutMe from "./aboutme";
import Experience from "./experience";
import ContactMeForm from "./contact-me-form";
import Footer from "./footer";
import Portfolio from "./portfolio";
import "../assets/styles/styles.scss";

class App extends Component {
  componentDidMount() {
    const onScroll = () => {
      // records the height of where the setState will change
      const headerHeight = window.innerHeight - 75;
      // records current position on the page
      let userWindow = window.pageYOffset;
      // triggers function to change navigation bar
      userWindow > headerHeight
        ? this.props.toggleNavigation(true)
        : this.props.toggleNavigation(false);
    };

    window.addEventListener("scroll", onScroll);

    this.props.fetchExperience();
    this.props.fetchPortfolio();
  }

  render() {
    return (
      <div>
        <Landing />
        <Header
          showNavigation={this.props.showNavigation}
          offset={this.props.offset}
          duration={this.props.duration}
        />
        <div className="container">
          <Element name="AboutMe">
            <AboutMe
              offset={this.props.offset}
              duration={this.props.duration}
            />
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
        <Footer offset={this.props.offset} duration={this.props.duration} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { uiReducer } = state;
  return uiReducer;
};

const mapDispatchToProps = {
  fetchEducation,
  fetchExperience,
  fetchPortfolio,
  toggleNavigation
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
