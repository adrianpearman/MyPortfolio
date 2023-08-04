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
            key={uuidv4()}
            style={{
              backgroundImage: `url(${projectImage})`,
              backgroundPosition: "center",
            }}
            tabIndex={0}
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
