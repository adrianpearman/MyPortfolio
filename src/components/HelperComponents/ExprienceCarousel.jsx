// NPM Modules
import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
// Components
import ExperienceItem from "./ExperienceItem";

const ExperienceCarousel = ({ data }) => {
  const ulElement = useRef(null);
  const [showJob, setShowJob] = useState(false);
  const [job, setJob] = useState(0);

  const handleJobClick = (e, index) => {
    if (e.type === "click" || e.key === "Enter") {
      setShowJob(false);
      const siblingJobElements = ulElement.current.children;
      for (let i = 0; i < siblingJobElements.length; i++) {
        const element = siblingJobElements[i];
        element.classList.remove("active");
      }
      setJob(index);
      setTimeout(() => {
        setShowJob(true);
      }, 100);
    }
  };

  useEffect(() => {
    setShowJob(true);
  }, []);

  return (
    <>
      {data.length > 0 ? (
        <div className="jobContainer">
          <div className="jobTitleContainer">
            <h3>
              Roles
              <span></span>
            </h3>
            <ul className="jobTitleList" ref={ulElement}>
              {data.map((value, key) => {
                return (
                  <li
                    className={key === job ? "active" : ""}
                    key={key}
                    onClick={(e) => {
                      handleJobClick(e, key);
                    }}
                    onKeyDown={(e) => {
                      handleJobClick(e, key);
                    }}
                    tabIndex={0}
                  >
                    <p>
                      <span>{value.title}:</span> {value.employer}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="jobTitleDescription">
            {/* todo - need to figure out how animate properly */}
            <AnimatePresence initial={false} mode="wait">
              {showJob ? <ExperienceItem experience={data[job]} /> : null}
            </AnimatePresence>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ExperienceCarousel;
