import { FETCH_EXPERIENCE } from "../actions/types";

const INITIAL_STATE = {
  experience: []
};

export const experienceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EXPERIENCE:
      return { ...state, experience: action.payload };
    default:
      return state;
  }
};
