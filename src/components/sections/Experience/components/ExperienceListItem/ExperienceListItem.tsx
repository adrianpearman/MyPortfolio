import type { TTimelineEntry } from "@/utils/types";

import { cn } from "@/utils/functions";

type TExperienceListItemProps = {
  experience: TTimelineEntry;
  index: number;
};

export const ExperienceListItem = ({
  experience,
}: TExperienceListItemProps) => {
  return (
    <li className="flex justify-between items-center gap-2 p-2 ">
      <div className="flex gap-4">
        <div className="pt-2">
          <div
            className={cn("size-3 rounded-full", experience.iconColor)}
          ></div>
        </div>
        <div>
          <p>
            <strong>{experience.title}</strong>
          </p>
          <p>{experience.employer}</p>
        </div>
      </div>
      <p>{experience.dates}</p>
    </li>
  );
};
