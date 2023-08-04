import React, {useState} from "react";
import { v4 as uuid } from "uuid";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ExperienceItems = props => {
  const [ showCard, setShowCard ] = useState(false)

  const handleClassChange = () => setShowCard(!showCard)


  return (
    <li 
      className={ `experience_item ${showCard ? "active" : ""}`}
      onClick={() => handleClassChange()}  
    >
      <div className={`experience_item_primary ${showCard ? "hidden" : ""}`}>
        <p>{props.employer}</p>
        <p>{props.title}</p>
        <p>{props.dates}</p>
      </div>
      <div className={`experience_item_expanded ${!showCard ? "hidden" : ""}`}>
        <div className="experience_header">
          <h3 className="vertical-timeline-element-title mb-3 experience-title">
            <span className="emphasize-title">Company:</span> {props.employer}
          </h3>
          <h3 className="vertical-timeline-element-title mb-3 experience-title">
            <span className="emphasize-title">Title:</span> {props.title}
          </h3>
          <h3 className="vertical-timeline-element-title mb-3 experience-title">
            <span className="emphasize-title">Dates:</span> {props.dates}
          </h3>
        </div>

        <div className="experience_main">
          <h3 className="vertical-timeline-element-subtitle mb-3 experience-title">
            <span className="emphasize-title">Location:</span> {props.location}
          </h3>

          <h3 className="experience-title experience-title-responsibility">
            <span className="emphasize-title">Responsibilities:</span>
          </h3>
          <ul className="experience-list">
            {props.responsibilities.map((responsibility, index) => {
              return <li key={uuid()}>{responsibility}</li>;
            })}
          </ul>
        </div>
      </div>
    </li>
    // <VerticalTimelineElement
    //   className="vertical-timeline-element--work experience-title"
    //   iconStyle={{ background: "#2400b6" }}
    // >

    // </VerticalTimelineElement>
  );
};

export default ExperienceItems;
