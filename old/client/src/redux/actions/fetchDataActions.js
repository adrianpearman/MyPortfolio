import { FETCH_PROJECTS, FETCH_EDUCATION, FETCH_EXPERIENCE } from "./types";
import axios from "axios";

const fetchEducation = () => dispatch => {
  dispatch({
    type: FETCH_EDUCATION,
    payload: []
  });
};

const fetchExperience = () => dispatch => {
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

const fetchPortfolio = () => dispatch => {
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

export default {
  fetchEducation,
  fetchExperience,
  fetchPortfolio
};
