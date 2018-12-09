import React, { Component, Fragment } from 'react'
import axios from 'axios'

 class ContactMeForm extends Component {
    state = {
        emailName: '',
        emailNameValidate: null,
        emailCompany: '',
        emailCompanyValidate: null,
        emailContact: '',
        emailContactValidate: null,
        emailDescription: '',
        emailDescriptionValidate: null,
        messageSuccess: false
    }

    emailName = (e) => {
        this.setState({ 
            emailName: e.target.value, 
            emailNameValidate: true 
        })
    }

    emailCompanyHandler = (e) => {
        this.setState({ 
            emailCompany: e.target.value, 
            emailCompanyValidate: true 
        })
    }

    emailContactHandler = (e) => {
        this.setState({ 
            emailContact: e.target.value, 
            emailContactValidate: true 
        })
    }

    emailDescriptionHandler = (e) => {
        this.setState({ 
            emailDescription: e.target.value, 
            emailDescriptionValidate: true 
        })
    }

    emailSubmitHandler = (e) => {
        e.preventDefault()
        // Setting Email Object
        const emailObject = {
            name: this.state.emailName,
            company: this.state.emailCompany,
            email: this.state.emailContact,
            description: this.state.emailDescription,
        }

        // Validating the inputs are filled
        this.state.emailNameValidate ? this.setState({ emailNameValidate: true }) : this.setState({ emailNameValidate: false })
        this.state.emailCompanyValidate ? this.setState({ emailCompanyValidate: true }) : this.setState({ emailCompanyValidate: false })
        this.state.emailContactValidate ? this.setState({ emailContactValidate: true }) : this.setState({ emailContactValidate: false })
        this.state.emailDescriptionValidate ? this.setState({ emailDescriptionValidate: true }) : this.setState({ emailDescriptionValidate: false })
        // Setting condition for email to be sent off

        
        let formFilled  
        if (this.state.emailNameValidate && this.state.emailCompanyValidate && this.state.emailContactValidate && this.state.emailDescriptionValidate){
            formFilled = true
        }
        
        // Sending email
        if(formFilled){
            axios.post('http://localhost:3001/api/contact-me', emailObject)
            .then(result => {
                this.setState({ messageSuccess: true })
                console.log(result)
            })
            .catch(err => console.log(err))
            console.log(emailObject)
        } else {
            console.log('please check the input values...')
        }

    }

    //  "proxy": "http://localhost:3001"

  render() {
      let color = {color: 'red'}

      let buttonClass = this.state.messageSuccess ? 'btn btn-success' : 'btn btn-primary'

      const validateInputFunction = (stateValue, text) => {
          if (stateValue === null) {
              return <Fragment></Fragment>
          } else if (stateValue === false) {
              return <div style={color}>{text}</div>
          } else {
              return <Fragment></Fragment>
          }
      }

    return (
        <div className='contact-me'>
            <div className='section__title'>
                <h1>Contact Me <span className='emphasize'>/</span></h1>
            </div>
            <div className='contact-me__form row mb-4'>
                <p className='col-md-6 offset-md-3'>
                    Thank you for taking the time to look at my portfolio<span className='emphasize'>!</span>.
                    <br />
                    Starting a new project<span className='emphasize'>?</span>
                    <br /> 
                    Exploring options for a current project<span className='emphasize'>?</span>
                    <br /> 
                    Looking to add a new member to your team<span className='emphasize'>?</span>
                    <br /> 
                    Contact me and lets collaborate<span className='emphasize'>!</span>
                    <br />
                    <br />
                    I look forward to hearing from you<span className='emphasize'>!</span>
                </p>
            </div>
            <form className='form-input'>
                <fieldset>
                    <div className="form-group">
                        <div className='mb-3 has-danger'>
                            <label htmlFor="exampleInputEmail1">
                                Name
                        </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={this.emailName}
                            />
                            {validateInputFunction(this.state.emailNameValidate, 'Please enter a name')}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="exampleInputEmail2">
                                Company Name
                        </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={this.emailCompanyHandler}
                            />
                            {validateInputFunction(this.state.emailCompanyValidate, 'Please enter a company name')}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="exampleInputEmail3">
                                Email Address
                        </label>
                            <input
                                type="email"
                                className="form-control"
                                id="exampleInputEmail1" aria-describedby="emailHelp"
                                onChange={this.emailContactHandler}
                            />
                            {validateInputFunction(this.state.emailContactValidate, 'Please enter a valid contact method')}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="exampleTextarea">
                                Message
                        </label>
                            <textarea
                                className="form-control"
                                id="exampleTextarea"
                                rows="3"
                                onChange={this.emailDescriptionHandler}
                            >
                            </textarea>
                            {validateInputFunction(this.state.emailDescriptionValidate, 'Please enter a message')}
                        </div>
                        <button
                            className={buttonClass}
                            onClick={this.emailSubmitHandler}

                        >
                            {this.state.messageSuccess ? 'Sent!' : 'Send'}
                        </button>
                    </div>
                </fieldset>
            </form>
        </div>
    )
  }
}

export default ContactMeForm