// NPM Modules
import { motion } from "framer-motion";
// Motion Animation Helper
import { dropIn, dropOver } from "../../utils/motionAnimations";

const ExperienceItem = ({ experience }) => {
  const { dates, employer, location, responsibilities, title } = experience;
  return (
    <motion.div
      animate="visible"
      exit="exit"
      initial="hidden"
      variants={dropOver}
    >
      <p>
        <span>Company: </span>
        {employer}
      </p>
      <p>
        <span>Title: </span>
        {title}
      </p>
      <p>
        <span>Location: </span>
        {location}
      </p>
      <p>
        <span>Dates: </span>
        {dates}
      </p>
      <p>
        <span>Responsibilities:</span>
      </p>
      {responsibilities.length > 0 ? (
        <ul>
          {responsibilities.map((task, key) => {
            return (
              <li key={key}>
                <p>{task}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Responsibilities coming soon!</p>
      )}
    </motion.div>
  );
};

export default ExperienceItem;
