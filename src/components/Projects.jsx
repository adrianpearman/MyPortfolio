// Components
import ProjectDisplayContainer from "./HelperComponents/ProjectDisplayContainer";
// Data
import { projectData } from "../data";

const Projects = ({
  offsetHeight,
  setSelectedProject,
  setShowProjectModal,
  showProjectModal,
}) => {
  // Functions
  const handleShowProjectModal = (e, project) => {
    if (e.type === "click" || e.key === "Enter") {
      // todo - consider stopping scrolling when the modal is open
      if (showProjectModal) {
        setSelectedProject({});
        setShowProjectModal(false);
      } else {
        setSelectedProject(project);
        setShowProjectModal(true);
      }
    }
  };

  return (
    <div className="projects">
      <div className="wrapper">
        <h2>
          Projects
          <span></span>
        </h2>
        <div className="projectsContainer">
          <ProjectDisplayContainer
            data={projectData}
            handleShowProjectModal={handleShowProjectModal}
            offsetHeight={offsetHeight}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
