// Make sure to run npm install @formspree/react
// For more help visit https://formspr.ee/react-help
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xyyakzjd");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  
  return (
    <div className="contactForm">
      <div className="wrapper">
        <h2>
          Contact Me
          <span></span>
        </h2>

        <div className="formContainer">
          {/* <div className="textContainer">
            <div aria-hidden className="introTop">
              {`<Closing>`}
            </div>
            <p>
                Thank you soo much for looking through my website! 
                <br/>
                Feel free to contact me below through my contact form, view my LinkedIn profile, look through my repository or schedule a meeting with me through the Calendy link! 
            </p>
            <div aria-hidden className="introBottom">
              {`</Closing>`}
            </div>
          </div> */}

          <form onSubmit={handleSubmit}>
            <div className='nameContainer'>
              <div className='firstName'>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text" 
                />
                <ValidationError 
                  errors={state.errors}
                  field="firstName"
                  prefix="First Name" 
                />
              </div>
              <div className='lastName'>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text" 
                  />
                  <ValidationError 
                    errors={state.errors}
                    field="lastName"
                    prefix="Last Name" 
                  />
              </div>
            </div>
               
            <div className='emailContainer'>
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email" 
              />
              <ValidationError 
                errors={state.errors}
                field="email"
                prefix="Email" 
              />
            </div>
            <div className='messageContainer'>
              <label htmlFor='message'>Message</label>
              <textarea 
                id="message" 
                name="message" 
              />
              <ValidationError 
                errors={state.errors}
                field="message"
                prefix="Message" 
              />
            </div>
            <button 
              disabled={state.submitting}
              type="submit" 
            >
              Submit
            </button>
          </form>

          <span className='line'></span>

          <div className='buttonContainer'>
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
  )
}

export default ContactForm;