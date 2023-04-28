// Components
import ExperienceCarousel from "./HelperComponents/ExprienceCarousel";
// Data
import experienceData from "../data/experience.json";

const Experience = () => {
  return (
    <div className="experience">
      <div className="wrapper">
        <h2>
          Experience
          <span></span>
        </h2>
        <ExperienceCarousel data={experienceData}/>
      </div>
    </div>
  )
}

export default Experience