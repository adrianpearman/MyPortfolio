import { combineReducers } from "redux";
import { contactFormReducer } from "./contactFormReducer";
import { educationReducer } from "./educationReducer";
import { experienceReducer } from "./experienceReducer";
import { projectsReducer } from "./projectsReducer";
import { uiReducer } from "./uiReducer";

const reducers = combineReducers({
  contactForm: contactFormReducer,
  education: educationReducer,
  experience: experienceReducer,
  projects: projectsReducer,
  uiReducer: uiReducer
});

export default reducers;
