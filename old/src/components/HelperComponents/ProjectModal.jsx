// NPM Modules
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useLockBodyScroll } from "@uidotdev/usehooks";
// Components
import ModalBackground from "./ModalBackground";
import HelperLanguageIcon from "./HelperLanguageIcon";
// Util function
import { dropIn } from "../../utils/motionAnimations";

const ProjectModal = ({ handleClose, selectedProject }) => {
  const { liveLink, projectImage, repoLink, stack, title } = selectedProject;

  // stops the body from scrolling while modal is open
  useLockBodyScroll();
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
        <div className="selectedProject">
          <i
            className="close-modal fa-regular fa-rectangle-xmark"
            onClick={handleClose}
          ></i>
          <h2>
            {title}
            <span></span>
          </h2>
          <div className="selectedProjectImage">
            <a href={liveLink} target="_blank" rel="noreferrer">
              <img alt={`${title}`} src={projectImage}></img>
            </a>
          </div>
          <div className="selectedProjectContent">
            <div className="techContainer">
              <h3>
                Tech Stack
                <span></span>
              </h3>
              <ul>
                {stack.map((language) => {
                  return (
                    <li key={uuidv4()}>
                      <HelperLanguageIcon langugage={language} />
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="linkContainer">
              <h3>
                Links
                <span></span>
              </h3>
              {liveLink ? (
                <a href={liveLink} target="_blank" rel="noreferrer">
                  Live Link
                </a>
              ) : null}
              {repoLink ? (
                <a href={repoLink} target="_blank" rel="noreferrer">
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
