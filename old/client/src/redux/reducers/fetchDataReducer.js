import {
  FETCH_EDUCATION,
  FETCH_EXPERIENCE,
  FETCH_PROJECTS
} from "../actions/types";

const INITIAL_STATE = {
  education: [],
  experience: [],
  projects: []
};

export const fetchDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_EDUCATION:
      return {
        ...state,
        education: action.payload
      };
    case FETCH_EXPERIENCE:
      return {
        ...state,
        experience: action.payload
      };

    case FETCH_PROJECTS:
      return {
        ...state,
        projects: action.payload
      };

    default:
      return {
        ...state
      };
  }
};
