// Modules
import React from "react";
import { v4 as uuid } from "uuid";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { connect } from "react-redux";
// Components
import ExperienceItem from "./ExperienceItem";
import LoadingComponent from "../utils/LoadingComponent";

const Experience = ({ experience }) => {
  const experienceList = experience.map((experience) => {
    return (
      <ExperienceItem
        key={uuid()}
        dates={experience.dates}
        employer={experience.employer}
        location={experience.location}
        title={experience.title}
        responsibilities={experience.responsibilities}
      />
    );
  });

  return (
    <div className="experience">
      <div className="experience_title">
         <h2>
          Professional Experience <span className="emphasize">/</span>
        </h2>
      </div>
      <div className="experience_items">
        <ul>
          {experience.length > 0 ? experienceList : <LoadingComponent />}
        </ul>
      </div>
      {/* <div className="experience__title section__title">
       
      </div> */}
    </div>
  );
};

const mapStateToProps = ({ fetchDataReducer }) => {
  const { experience } = fetchDataReducer;
  return { experience };
};

export default connect(mapStateToProps)(Experience);
