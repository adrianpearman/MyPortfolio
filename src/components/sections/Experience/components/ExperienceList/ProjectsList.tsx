import { useEffect, useMemo, useRef, useState } from "react";
import { BaseButton } from "@/components/reuseable";
import { motion } from "motion/react";

import { ExperienceListItem } from "@/components/sections/Experience/components/ExperienceListItem";
import { EXPERIENCE_DATA } from "@/data";

export const ExperienceList = () => {
  const ref = useRef<HTMLUListElement>(null);

  const [showAllExperience, setShowAllExperience] = useState(false);
  const [height, setHeight] = useState<number>(0);

  const displayedExperience = useMemo(() => {
    if (showAllExperience) {
      return EXPERIENCE_DATA;
    }
    return EXPERIENCE_DATA.slice(0, 5);
  }, [showAllExperience]);

  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const observer = new ResizeObserver(() => setHeight(list.offsetHeight));
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-heading-4 tracking-normal">Experience</h2>
      <motion.div
        animate={{ height: height || "auto" }}
        className="overflow-clip"
        initial={false}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <ul ref={ref}>
          {displayedExperience.map((experience, index) => (
            <ExperienceListItem
              experience={experience}
              index={index}
              key={`experience-list-item-${index}`}
            />
          ))}
        </ul>
      </motion.div>
      <div className="flex justify-center">
        <BaseButton
          onClick={() => setShowAllExperience(!showAllExperience)}
          variant="primary"
        >
          {showAllExperience ? "Show Less" : "Show More"}
        </BaseButton>
      </div>
    </div>
  );
};
