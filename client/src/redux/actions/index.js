import {
  CLEAR_CONTACT_FORM,
  FETCH_PROJECTS,
  FETCH_EDUCATION,
  FETCH_EXPERIENCE,
  TOGGLE_NAVIGATION,
  UPDATE_COMPANY_NAME,
  UPDATE_EMAIL_ADDRESS,
  UPDATE_EMAIL_MESSAGE,
  UPDATE_MESSAGE_STATUS,
  UPDATE_NAME
} from "./types";
import axios from "axios";
import validator from "validator";

export const fetchEducation = () => dispatch => {
  dispatch({
    type: FETCH_EDUCATION,
    payload: []
  });
};

export const fetchExperience = () => dispatch => {
  axios
    .get("/api/data/experienceList")
    .then(res => {
      const experienceData = res.data;
      dispatch({
        type: FETCH_EXPERIENCE,
        payload: experienceData
      });
    })
    .catch(err => console.log(err));
};

export const fetchPortfolio = () => dispatch => {
  axios
    .get("/api/data/projectList")
    .then(res => {
      let projects = res.data;
      dispatch({
        type: FETCH_PROJECTS,
        payload: projects
      });
    })
    .catch(err => console.error(err));
};

export const toggleNavigation = value => dispatch => {
  dispatch({
    type: TOGGLE_NAVIGATION,
    payload: value
  });
};

// CONTACT ME FORM
export const updateNameInput = value => dispatch => {
  let content;
  if (value.length > 3) {
    content = {
      emailName: value,
      emailNameValidate: true
    };
  } else {
    content = {
      emailName: value,
      emailNameValidate: false
    };
  }
  dispatch({
    type: UPDATE_NAME,
    payload: content
  });
};

export const updateEmailInput = value => dispatch => {
  let content;
  if (validator.isEmail(value)) {
    content = {
      emailAddress: value,
      emailAddressValidate: true
    };
  } else {
    content = {
      emailAddress: value,
      emailAddressValidate: false
    };
  }
  dispatch({
    type: UPDATE_EMAIL_ADDRESS,
    payload: content
  });
};

export const updateCompanyNameInput = value => dispatch => {
  let content;
  if (value.length > 3) {
    content = {
      emailCompany: value,
      emailCompanyValidate: true
    };
  } else {
    content = {
      emailCompany: value,
      emailCompanyValidate: false
    };
  }

  dispatch({
    type: UPDATE_COMPANY_NAME,
    payload: content
  });
};

export const updateMessageInput = value => dispatch => {
  let content;
  if (value.length > 3) {
    content = {
      emailMessage: value,
      emailMessageValidate: true
    };
  } else {
    content = {
      emailMessage: value,
      emailMessageValidate: false
    };
  }

  dispatch({
    type: UPDATE_EMAIL_MESSAGE,
    payload: content
  });
};

export const clearContactForm = () => dispatch => {
  let value = {
    emailName: "",
    emailNameValidate: null,
    emailCompany: "",
    emailCompanyValidate: null,
    emailAddress: "",
    emailAddressValidate: null,
    emailMessage: "",
    emailMessageValidate: null,
    messageSuccess: null
  };

  dispatch({
    type: CLEAR_CONTACT_FORM,
    payload: value
  });
};

export const updateMessageStatus = value => dispatch => {
  dispatch({
    type: UPDATE_MESSAGE_STATUS,
    payload: {
      messageSuccess: value
    }
  });
};

export const submitContactForm = (formFilled, contactInfo) => dispatch => {
  if (formFilled) {
    axios
      .post("/api/contact-me", contactInfo)
      .then(() => {
        dispatch(updateMessageStatus(true));
        setTimeout(() => {
          dispatch(clearContactForm());
        }, 2000);
      })
      .catch(err => {
        dispatch(updateMessageStatus(false));
        console.log(err);
      });
  } else {
    console.log("please check the input values...");
  }
};
