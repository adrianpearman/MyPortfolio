// Components
import ProjectCarousel from "./HelperComponents/ProjectCarousel";
// Data
import projectData from "../data/projects.json";

const Projects = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <h2>
          Projects
          <span></span>
        </h2>

        <div className="projectsContainer">
          <p>
            👷🏾‍♂️ 🚧 🏗
            <br />
            Under Construction! New Stuff Coming Soon!
            <br />
            🏗 🚧 👷🏾‍♂️
          </p>
          {/* <ProjectCarousel data={projectData}/> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
