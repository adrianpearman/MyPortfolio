import React from "react";
import { connect } from "react-redux";
import ACTIONS from "../../redux/actions";

const ContactMeForm = props => {
  const validateInputFunction = (stateValue, text) => {
    if (stateValue === null) {
      return <></>;
    } else if (stateValue === false) {
      return <div style={{ color: "red" }}>{text}</div>;
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
          <button
            className="btn btn-success"
            onClick={e => props.submitContactForm(e)}
          >
            Sent
          </button>
        );
      case false:
        return (
          <button
            className="btn btn-danger"
            onClick={e => props.submitContactForm(e)}
          >
            Fail
          </button>
        );
      default:
        return (
          <button
            className="btn btn-primary"
            onClick={e => props.submitContactForm(e)}
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
        <h2>
          Contact Me <span className="emphasize">/</span>
        </h2>
      </div>
      <div className="contact-me__form row mb-4">
        <div className="col-12">
          <p>
            Thank you for taking the time to look at my portfolio
            <span className="emphasize">!</span>
          </p>
          <p>
            Starting a new project<span className="emphasize">?</span>
          </p>
          <p>
            Exploring options for a current project
            <span className="emphasize">?</span>
          </p>
          <p>
            Looking to add a new member to your team
            <span className="emphasize">?</span>
          </p>
          <p>
            Contact me and lets collaborate<span className="emphasize">!</span>
          </p>
          <br />
          <p>
            I look forward to hearing from you
            <span className="emphasize">!</span>
          </p>
        </div>
      </div>
      <form className="form-input">
        <fieldset>
          <div className="form-group">
            <div className="input-container">
              <label htmlFor="emailName">Name</label>
              <input
                type="email"
                className="form-control"
                id="emailName"
                onChange={e => props.updateNameInput(e.target.value)}
                value={props.emailName}
              />
              {validateInputFunction(
                props.emailNameValidate,
                "Please enter a name"
              )}
            </div>
            <div className="input-container">
              <label htmlFor="emailCompany">Company Name</label>
              <input
                type="email"
                className="form-control"
                id="emailCompany"
                onChange={e => props.updateCompanyNameInput(e.target.value)}
                value={props.emailCompany}
              />
              {validateInputFunction(
                props.emailCompanyValidate,
                "Please enter a company name"
              )}
            </div>
            <div className="input-container">
              <label htmlFor="emailAddress">Email Address</label>
              <input
                type="email"
                className="form-control"
                id="emailAddress"
                onChange={e => props.updateEmailInput(e.target.value)}
                value={props.emailAddress}
              />
              {validateInputFunction(
                props.emailAddressValidate,
                "Please enter a valid contact method"
              )}
            </div>
            <div className="input-container form-group">
              <label htmlFor="emailMessage">Message</label>
              <textarea
                className="form-control"
                id="emailMessage"
                rows="3"
                onChange={e => props.updateMessageInput(e.target.value)}
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

const mapStateToProps = ({ contactFormReducer }) => {
  return contactFormReducer;
};

const mapDispatchToProps = {
  submitContactForm: ACTIONS.submitContactForm,
  updateCompanyNameInput: ACTIONS.updateCompanyNameInput,
  updateEmailInput: ACTIONS.updateEmailInput,
  updateMessageInput: ACTIONS.updateMessageInput,
  updateNameInput: ACTIONS.updateNameInput
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMeForm);
