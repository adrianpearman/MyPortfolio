import {
  CLEAR_CONTACT_FORM,
  UPDATE_COMPANY_NAME,
  UPDATE_EMAIL_ADDRESS,
  UPDATE_EMAIL_MESSAGE,
  UPDATE_MESSAGE_STATUS,
  UPDATE_NAME
} from "../actions/types";

const INITIAL_STATE = {
  emailName: "",
  emailNameValidate: null,
  emailCompany: "",
  emailCompanyValidate: null,
  emailAddress: "",
  emailAddressValidate: null,
  emailMessage: "",
  emailMessageValidate: null,
  messageSuccess: false
};

export const contactFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_COMPANY_NAME:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_EMAIL_ADDRESS:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_EMAIL_MESSAGE:
      return {
        ...state,
        ...action.payload
      };
    case CLEAR_CONTACT_FORM:
      return {
        ...state,
        ...action.payload
      };
    case UPDATE_MESSAGE_STATUS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
