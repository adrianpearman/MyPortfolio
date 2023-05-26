// // NPM Modules
// import { useContext, useState } from "react";
// import { AnimatePresence } from "framer-motion";
// // Context Provider
// import { ThemeContext } from "../components/context/ContextProvider";
// // Components
// import ProjectDisplayContainer from "./HelperComponents/ProjectDisplayContainer";
// import ProjectModal from "./HelperComponents/ProjectModal";
// // Data
// import { projectData } from "../data";

// const Projects = ({ offsetHeight }) => {
//   // Context
//   const main = useContext(ThemeContext);
//   // State
//   const [showModal, setShowModal] = useState(false);
//   const [selectedProject, setSelectedProject] = useState({});
//   // Functions
//   const handleCloseModal = () => setShowModal(false);
//   const handleOpenModal = () => setShowModal(true);
//   const handleShowProjectModal = (e, project) => {
//     if (e.type === "click" || e.key === "Enter") {
//       window.scroll({
//         top: main.current.children[4].offsetTop - offsetHeight,
//         left: 0,
//         behavior: "smooth",
//       });

//       if (showModal) {
//         setSelectedProject({});
//         handleCloseModal();
//       } else {
//         setSelectedProject(project);
//         handleOpenModal();
//       }
//     }
//   };

//   return (
//     <div className="projects">
//       <div className="wrapper">
//         <h2>
//           Projects
//           <span></span>
//         </h2>
//         <div className="projectsContainer">
//           <ProjectDisplayContainer
//             data={projectData}
//             handleShowProjectModal={handleShowProjectModal}
//             offsetHeight={offsetHeight}
//           />

//           <AnimatePresence initial={false} mode="wait">
//             {showModal ? (
//               <ProjectModal
//                 handleClose={showModal ? handleCloseModal : handleOpenModal}
//                 selectedProject={selectedProject}
//               />
//             ) : null}
//           </AnimatePresence>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

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
        </div>
      </div>
    </div>
  );
};

export default Projects;
