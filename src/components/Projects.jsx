//
import ProjectCarousel from "./HelperComponents/ProjectCarousel"
// Data
import projectData from '../data/projects.json';

const Projects = () => {
  return (
    <div className="projects">
      <div className="wrapper">
        <h2>
          Projects
          <span></span>
        </h2>

        <div className="projectsContainer">
          <ProjectCarousel data={projectData}/>
        </div>
      </div>
    </div>
  )
}

export default Projects