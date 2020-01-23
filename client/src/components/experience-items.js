import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceItems = props => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work experience-title"
      iconStyle={{ background: "#5acacb" }}
    >
      <h5 className="vertical-timeline-element-title mb-3 experience-title">
        <span className="emphasize-title">Company:</span> {props.employer}
      </h5>
      <h5 className="vertical-timeline-element-title mb-3 experience-title">
        <span className="emphasize-title">Title:</span> {props.title}
      </h5>
      <h5 className="vertical-timeline-element-subtitle mb-3 experience-title">
        <span className="emphasize-title">Location:</span> {props.location}
      </h5>
      <h5 className="vertical-timeline-element-subtitle mb-3 experience-title">
        <span className="emphasize-title">Dates:</span> {props.dates}
      </h5>
      <h5 className="experience-title experience-title-responsibility">
        <span className="emphasize-title">Responsibilities:</span>
      </h5>
      <ul className="experience-list">
        {props.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceItems;
