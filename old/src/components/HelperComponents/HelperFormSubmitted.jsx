const HelperFormSubmittted = () => {
  return (
    <div className="contactForm">
      <div className="wrapper">
        <h2>
          Contact Me
          <span></span>
        </h2>

        <div className="formContainer">
          <div className="textContainer">
            <div aria-hidden className="introTop">
              {`<Closing>`}
            </div>
            <p>
              Thank you for taking the time to look at my portfolio!
              <br />
              Starting a new project?
              <br />
              Looking to add a new member to your team?
              <br />
              Contact me and lets collaborate!
            </p>
            <div aria-hidden className="introBottom">
              {`</Closing>`}
            </div>
          </div>

          <span className="line"></span>

          <p className="submittedForm">
            Thank you for reaching out! I'll be contacting you soon!
          </p>

          <span className="line"></span>

          <div className="buttonContainer">
            <a
              alt="Link to Adrian Pearman's professional LinkedIn profile"
              href="https://www.linkedin.com/in/adrian-pearman/"
              id="linkedin"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
              Linkedin
            </a>
            <a
              alt="Link to Adrian Pearman's Github profile"
              href="https://www.github.com/adrianpearman"
              id="github"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
              Github
            </a>
            <a
              alt="Link to Adrian Pearman's Calendy calendar"
              href="https://www.calendly.com/adrianpearman/30min"
              id="calendy"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-solid fa-calendar-days"></i>
              Calendy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelperFormSubmittted;
