// NPM Modules
import { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
// Components
import HelperFormSubmittted from './HelperComponents/HelperFormSubmitted';

const ContactForm = () => {
  const [state, handleSubmit] = useForm("xlekzgyk");
  const [ firstName, setFirstName ] = useState("")
  const [ lastName, setLastName ] = useState("")
  const [ email, setEmail ] = useState("")
  const [ message, setMessage ] = useState("")
  const [ disableSubmitButton, setDisableSubmitButton ] = useState(true)

  const handleInputChange = (e, property) => {
    const value = e.target.value.trim()
    if(property === "firstName"){
      setFirstName(value)
    }else if(property === "lastName"){
      setLastName(value)
    }else if(property === "email"){
      setEmail(value)
    }else if(property === "message"){
      setMessage(value)
    }
  }

  useEffect(() => {
    if(firstName.length > 0 && lastName.length > 0 && email.length > 0 && message.length > 0){
      setDisableSubmitButton(false)
    }else{
      setDisableSubmitButton(true)
    }
  })
  
  if (state.succeeded) {
      return <HelperFormSubmittted />;
  }
  
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
                <br/>
                Starting a new project? 
                <br/>
                Looking to add a new member to your team? 
                <br/>
                Contact me and lets collaborate!
            </p>
            <div aria-hidden className="introBottom">
              {`</Closing>`}
            </div>
          </div>

          <span className='line'></span>

          <form onSubmit={handleSubmit}>
            <div className='nameContainer'>
              <div className='firstName'>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text" 
                  value={firstName}
                  onChange={(e) => { handleInputChange(e, "firstName") }}
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
                    value={lastName}
                    onChange={(e) => { handleInputChange(e, "lastName") }}
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
                value={email}
                onChange={(e) => { handleInputChange(e, "email") }}
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
                value={message}
                onChange={(e) => { handleInputChange(e, "message") }}
              />
              <ValidationError 
                errors={state.errors}
                field="message"
                prefix="Message" 
              />
            </div>
            <button 
              disabled={disableSubmitButton}
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