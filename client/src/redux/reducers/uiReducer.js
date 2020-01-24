import { TOGGLE_NAVIGATION } from "../actions/types";

const INITIAL_STATE = {
  showNavigation: false,
  offset: -50,
  duration: 500
};

export const uiReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_NAVIGATION:
      return {
        ...state,
        showNavigation: action.payload
      };
    default:
      return state;
  }
};
