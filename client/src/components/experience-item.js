import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceItems = props => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work experience-title"
      iconStyle={{ background: "#2400b6" }}
    >
      <h3 className="vertical-timeline-element-title mb-3 experience-title">
        <span className="emphasize-title">Company:</span> {props.employer}
      </h3>
      <h3 className="vertical-timeline-element-title mb-3 experience-title">
        <span className="emphasize-title">Title:</span> {props.title}
      </h3>
      <h3 className="vertical-timeline-element-subtitle mb-3 experience-title">
        <span className="emphasize-title">Location:</span> {props.location}
      </h3>
      <h3 className="vertical-timeline-element-subtitle mb-3 experience-title">
        <span className="emphasize-title">Dates:</span> {props.dates}
      </h3>
      <h3 className="experience-title experience-title-responsibility">
        <span className="emphasize-title">Responsibilities:</span>
      </h3>
      <ul className="experience-list">
        {props.responsibilities.map((responsibility, index) => {
          return <li key={index}>{responsibility}</li>;
        })}
      </ul>
    </VerticalTimelineElement>
  );
};

export default ExperienceItems;
