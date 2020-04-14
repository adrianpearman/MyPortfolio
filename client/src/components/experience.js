// Modules
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { connect } from "react-redux";
// Components
import ExperienceItem from "./experience-items";
import LoadingComponent from "./loading";

const Experience = ({ experience }) => {
  const experienceList = experience.map((experience, index) => {
    return (
      <ExperienceItem
        key={index}
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
      <div className="experience__title section__title">
        <h1>
          Professional Experience <span className="emphasize">/</span>
        </h1>
      </div>
      <VerticalTimeline layout="1-column">
        {experience.length > 0 ? experienceList : <LoadingComponent />}
      </VerticalTimeline>
    </div>
  );
};

const mapStateToProps = ({ fetchDataReducer }) => {
  const { experience } = fetchDataReducer;
  return { experience };
};

export default connect(mapStateToProps)(Experience);
