import {
  CLEAR_CONTACT_FORM,
  UPDATE_COMPANY_NAME,
  UPDATE_EMAIL_ADDRESS,
  UPDATE_EMAIL_MESSAGE,
  UPDATE_MESSAGE_STATUS,
  UPDATE_NAME
} from "./types";
import axios from "axios";
import validator from "validator";

// CONTACT ME FORM
const updateNameInput = value => (dispatch, getState) => {
  if (value.length > 3) {
    dispatch({
      type: UPDATE_NAME,
      payload: {
        emailName: value,
        emailNameValidate: true
      }
    });
  } else {
    dispatch({
      type: UPDATE_NAME,
      payload: {
        emailName: value,
        emailNameValidate: false
      }
    });
  }
};

const updateEmailInput = value => dispatch => {
  if (validator.isEmail(value)) {
    dispatch({
      type: UPDATE_EMAIL_ADDRESS,
      payload: {
        emailAddress: value,
        emailAddressValidate: true
      }
    });
  } else {
    dispatch({
      type: UPDATE_EMAIL_ADDRESS,
      payload: {
        emailAddress: value,
        emailAddressValidate: false
      }
    });
  }
};

const updateCompanyNameInput = value => dispatch => {
  if (value.length > 3) {
    dispatch({
      type: UPDATE_COMPANY_NAME,
      payload: {
        emailCompany: value,
        emailCompanyValidate: true
      }
    });
  } else {
    dispatch({
      type: UPDATE_COMPANY_NAME,
      payload: {
        emailCompany: value,
        emailCompanyValidate: false
      }
    });
  }
};

const updateMessageInput = value => dispatch => {
  if (value.length > 3) {
    dispatch({
      type: UPDATE_EMAIL_MESSAGE,
      payload: {
        emailMessage: value,
        emailMessageValidate: true
      }
    });
  } else {
    dispatch({
      type: UPDATE_EMAIL_MESSAGE,
      payload: {
        emailMessage: value,
        emailMessageValidate: false
      }
    });
  }
};

const clearContactForm = () => dispatch => {
  let value = {
    emailName: "",
    emailNameValidate: null,
    emailCompany: "",
    emailCompanyValidate: null,
    emailAddress: "",
    emailAddressValidate: null,
    emailMessage: "",
    emailMessageValidate: null,
    messageSuccess: null,
    messageSuccessSend: null
  };

  dispatch({
    type: CLEAR_CONTACT_FORM,
    payload: value
  });
};

const updateMessageStatus = (value, msg) => dispatch => {
  dispatch({
    type: UPDATE_MESSAGE_STATUS,
    payload: {
      messageSuccess: value,
      messageSuccessSend: msg
    }
  });
};

const submitContactForm = e => async (dispatch, getState) => {
  e.preventDefault();

  let {
    emailName,
    emailNameValidate,
    emailCompany,
    emailCompanyValidate,
    emailAddress,
    emailAddressValidate,
    emailMessage,
    emailMessageValidate
  } = getState().contactFormReducer;

  let contactInfo = {
    name: emailName,
    company: emailCompany,
    email: emailAddress,
    description: emailMessage
  };

  // Setting condition for email to be sent off
  let formFilled =
    emailNameValidate &&
    emailCompanyValidate &&
    emailAddressValidate &&
    emailMessageValidate
      ? true
      : false;

  if (formFilled) {
    try {
      await axios.post("/api/contact-me", contactInfo);
      dispatch(
        updateMessageStatus(
          true,
          `Message sent, I'll be in touch with you soon!`
        )
      );
      setTimeout(() => {
        dispatch(clearContactForm());
      }, 2000);
    } catch (err) {
      dispatch(
        updateMessageStatus(
          false,
          "Unable to send contact form. Last request was within an hour. Try again later"
        )
      );
      setTimeout(() => {
        dispatch(clearContactForm());
      }, 2000);
    }
  }
};

export default {
  updateNameInput,
  updateEmailInput,
  updateCompanyNameInput,
  updateMessageInput,
  clearContactForm,
  updateMessageStatus,
  submitContactForm
};
