// React Modules
import React, { Component } from 'react';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll'

// Imported Components / Styling
import Header from './components/header'
import Landing from './components/landing'
import AboutMe from './components/aboutme'
import Experience from './components/experience'
import ContactMeForm from './components/contact-me-form'
import Footer from './components/footer'
import Portfolio from './components/portfolio'
import './assets/styles/styles.scss'

// setting duration for the scroll speed
const durationTop = 800

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showNavigation: false,
      offset: -50,
      duration: 500
    }
    this.onScroll = this.onScroll.bind(this)
  }


  scrollToTop() {
    scroll.scrollToTop();
  }

  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: durationTop,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  }

  // scrollToWithContainer() {
  //   let goToContainer = new Promise((resolve, reject) => {
  //     Events.scrollEvent.register("end", () => {
  //       resolve();
  //       Events.scrollEvent.remove("end");
  //     });
  //     scroller.scrollTo("scroll-container-second-element", {
  //       duration: durationTop,
  //       delay: 0,
  //       smooth: "easeInOutQuart",
  //       containerId: "scroll-container"
  //     });
  //   });
  // }

  onScroll() {
    // records the height of where the setState will change
    const headerHeight = window.innerHeight - 75
    // records current position on the page
    let userWindow = window.pageYOffset;

    // triggers function to change navigation bar
    if (userWindow > headerHeight) {
      // console.log('changed')
      this.setState({ showNavigation: true })
    }

    if (userWindow < headerHeight) {
      // console.log('unchanged')
      this.setState({ showNavigation: false })
    }
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", () => {
      // console.log("begin", arguments);
    });
    Events.scrollEvent.register("end", () => {
      // console.log("end", arguments);
    });
    window.addEventListener("scroll", this.onScroll);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  render() {
    return (
      <div>
        <Landing />
        <Header 
          showNavigation={this.state.showNavigation} 
          offset={this.state.offset}
          duration={this.state.duration}
        />
        <div className="container">
          <Element name='AboutMe'>
            <AboutMe 
              offset={this.state.offset}
              duration={this.state.duration}
            />
          </Element>

          <Element name='Experience'>
            <Experience />
          </Element>

          <Element name='Portfolio'>
            <Portfolio />
          </Element>

          <Element name='ContactMe'>
            <ContactMeForm />
          </Element>
        </div>
        <Footer 
          offset={this.state.offset} 
          duration={this.state.duration} 
        />
      </div>

    );
  }
}

export default App;
