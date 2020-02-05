import React from "react";
import { connect } from "react-redux";
import {
  submitContactForm,
  updateCompanyNameInput,
  updateEmailInput,
  updateMessageInput,
  updateNameInput
} from "../redux/actions";

const ContactMeForm = props => {
  const emailNameHandler = e => {
    props.updateNameInput(e.target.value);
  };
  const emailCompanyHandler = e => {
    props.updateCompanyNameInput(e.target.value);
  };
  const emailAddressHandler = e => {
    props.updateEmailInput(e.target.value);
  };
  const emailMessageHandler = e => {
    props.updateMessageInput(e.target.value);
  };
  const emailSubmitHandler = e => {
    e.preventDefault();
    // Setting Email Object
    const emailObject = {
      name: props.emailName,
      company: props.emailCompany,
      email: props.emailAddress,
      description: props.emailMessage
    };

    // Setting condition for email to be sent off
    let formFilled;
    if (
      props.emailNameValidate &&
      props.emailCompanyValidate &&
      props.emailAddressValidate &&
      props.emailMessageValidate
    ) {
      formFilled = true;
    }
    // Sending email
    props.submitContactForm(formFilled, emailObject);
  };

  let color = { color: "red" };

  const validateInputFunction = (stateValue, text) => {
    if (stateValue === null) {
      return <></>;
    } else if (stateValue === false) {
      return <div style={color}>{text}</div>;
    } else {
      return <></>;
    }
  };

  const validateContactForm = () => {
    if (
      props.emailName === "" ||
      props.emailCompany === "" ||
      props.emailAddress === "" ||
      props.emailMessage === ""
    ) {
      return true;
    } else {
      return false;
    }
  };

  const renderSendButton = () => {
    switch (props.messageSuccess) {
      case true:
        return (
          <button className="btn btn-success" onClick={emailSubmitHandler}>
            Sent
          </button>
        );
      case false:
        return (
          <button className="btn btn-danger" onClick={emailSubmitHandler}>
            Fail
          </button>
        );
      default:
        return (
          <button
            className="btn btn-primary"
            onClick={emailSubmitHandler}
            disabled={validateContactForm()}
          >
            Send
          </button>
        );
    }
  };

  const renderSuccessMessage = () => {
    switch (props.messageSuccess) {
      case true:
        return (
          <div className="alert alert-success">
            <strong>{props.messageSuccessSend}</strong>
          </div>
        );
      case false:
        return (
          <div className="alert alert-danger">
            <strong>{props.messageSuccessSend}</strong>
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className="contact-me">
      <div className="section__title">
        <h1>
          Contact Me <span className="emphasize">/</span>
        </h1>
      </div>
      <div className="contact-me__form row mb-4">
        <p className="col-md-6 offset-md-3">
          Thank you for taking the time to look at my portfolio
          <span className="emphasize">!</span>.
          <br />
          Starting a new project<span className="emphasize">?</span>
          <br />
          Exploring options for a current project
          <span className="emphasize">?</span>
          <br />
          Looking to add a new member to your team
          <span className="emphasize">?</span>
          <br />
          Contact me and lets collaborate<span className="emphasize">!</span>
          <br />
          <br />I look forward to hearing from you
          <span className="emphasize">!</span>
        </p>
      </div>
      <form className="form-input">
        <fieldset>
          <div className="form-group">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={emailNameHandler}
                value={props.emailName}
              />
              {validateInputFunction(
                props.emailNameValidate,
                "Please enter a name"
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail2">Company Name</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={emailCompanyHandler}
                value={props.emailCompany}
              />
              {validateInputFunction(
                props.emailCompanyValidate,
                "Please enter a company name"
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail3">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={emailAddressHandler}
                value={props.emailAddress}
              />
              {validateInputFunction(
                props.emailAddressValidate,
                "Please enter a valid contact method"
              )}
            </div>
            <div className="mb-3 form-group">
              <label htmlFor="exampleTextarea">Message</label>
              <textarea
                className="form-control"
                id="exampleTextarea"
                rows="3"
                onChange={emailMessageHandler}
                value={props.emailMessage}
              ></textarea>
              {validateInputFunction(
                props.emailMessageValidate,
                "Please enter a message"
              )}
            </div>
            {renderSuccessMessage()}
            {renderSendButton()}
          </div>
        </fieldset>
      </form>
    </div>
  );
};

const mapStateToProps = state => {
  const { contactForm } = state;
  return contactForm;
};

const mapDispatchToProps = {
  submitContactForm,
  updateCompanyNameInput,
  updateEmailInput,
  updateMessageInput,
  updateNameInput
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMeForm);
