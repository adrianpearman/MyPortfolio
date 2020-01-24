import { FETCH_EDUCATION } from "../actions/types";

const INITIAL_STATE = {
  education: []
};

export const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EDUCATION:
      return { ...state, education: action.payload };
    default:
      return state;
  }
};
