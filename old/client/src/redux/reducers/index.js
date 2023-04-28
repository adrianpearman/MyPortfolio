import { combineReducers } from "redux";
import { fetchDataReducer } from "./fetchDataReducer";
import { contactFormReducer } from "./contactFormReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  contactFormReducer,
  fetchDataReducer,
  uiReducer
});

export default reducers;
