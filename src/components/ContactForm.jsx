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
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text" 
            />
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
            <textarea id="message" name="message" />
            <ValidationError 
              errors={state.errors}
              field="message"
              prefix="Message" 
            />
            <button type="submit" disabled={state.submitting}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;