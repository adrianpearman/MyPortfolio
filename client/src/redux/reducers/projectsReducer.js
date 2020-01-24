import { FETCH_PROJECTS } from "../actions/types";

const INITIAL_STATE = {
  projects: []
};

export const projectsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_PROJECTS:
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
