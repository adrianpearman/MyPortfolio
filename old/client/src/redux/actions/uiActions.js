import { TOGGLE_NAVIGATION } from "./types";

const toggleNavigation = value => dispatch => {
  dispatch({
    type: TOGGLE_NAVIGATION,
    payload: value
  });
};

export default {
  toggleNavigation
};
