// NPM Modules
import { v4 as uuidv4 } from "uuid";

const ProjectDisplayContainer = ({ data, handleShowProjectModal }) => {
  return (
    <ul className="projectDisplayContainer">
      {data.map((project) => {
        const { title, projectImage } = project;
        return (
          <li
            className="projectItem"
            onClick={(e) => {
              handleShowProjectModal(e, project);
            }}
            onKeyDown={(e) => {
              handleShowProjectModal(e, project);
            }}
            style={{ backgroundImage: `url(${projectImage})` }}
            tabIndex={0}
            key={uuidv4()}
          >
            <div className="projectTitleContainer">
              <h3>{title}</h3>
              <p>click to view more</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectDisplayContainer;
