import { useMemo, useState } from "react";
import { BaseButton } from "@/components/reuseable";

import { ExperienceListItem } from "@/components/sections/Experience/components/ExperienceListItem";
import { EXPERIENCE_DATA } from "@/data";

export const ExperienceList = () => {
  const [showAllExperience, setShowAllExperience] = useState(false);

  const displayedExperience = useMemo(() => {
    if (showAllExperience) {
      return EXPERIENCE_DATA;
    }
    return EXPERIENCE_DATA.slice(0, 5);
  }, [showAllExperience]);

  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-heading-4 tracking-normal">Experience</h2>
      <ul>
        {displayedExperience.map((experience, index) => (
          <ExperienceListItem
            experience={experience}
            index={index}
            key={`experience-list-item-${index}`}
          />
        ))}
      </ul>
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
