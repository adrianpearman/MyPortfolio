// NPM Modules
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
// Components
import ModalBackground from "./ModalBackground";
// Util function
import { dropIn } from "../../utils/motionAnimations";

const ProjectModal = ({ handleClose, selectedProject }) => {
  const { liveLink, overview, projectImage, repoLink, stack, title } =
    selectedProject;
  return (
    <ModalBackground onClick={handleClose}>
      <motion.div
        animate="visible"
        className="modal"
        exit="exit"
        initial="hidden"
        onClick={(e) => e.stopPropagation()}
        variants={dropIn}
        tabIndex={1}
      >
        <div className="selectedProjectContent">
          <i
            className="close-modal fa-regular fa-rectangle-xmark"
            onClick={handleClose}
          ></i>
          <h2>
            {title}
            <span></span>
          </h2>
          <div className="selectedProjectImage">
            <a href={liveLink} target="_blank">
              <img alt={`${title}`} src={projectImage}></img>
            </a>
          </div>
          <div className="selectedProjectContent">
            <h3>Project Overview</h3>
            <p>{overview}</p>
            <h3>Tech Stack</h3>
            <ul>
              {stack.map((language) => {
                return <li key={uuidv4()}>{language}</li>;
              })}
            </ul>
            <div>
              {liveLink ? (
                <a className="" href={liveLink} target="_blank">
                  Live Link
                </a>
              ) : null}
              {repoLink ? (
                <a className="" href={repoLink} target="_blank">
                  Github
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </motion.div>
    </ModalBackground>
  );
};

export default ProjectModal;
