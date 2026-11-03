import { Tooltip } from "@/components/reuseable";
import { cn } from "@/utils/functions";
import type { TTimelineEntry } from "@/utils/types";

type TExperienceListItemProps = {
  experience: TTimelineEntry;
  index: number;
};

export const ExperienceListItem = ({
  experience,
}: TExperienceListItemProps) => {
  return (
    <li className="flex justify-between items-center gap-2 p-2 ">
      <div className="flex gap-4 w-1/2">
        <div className="pt-2">
          <div
            className={cn("size-3 rounded-full", experience.iconColor)}
          ></div>
        </div>
        <div className="min-w-0">
          <Tooltip content={experience.title}>
            <p className="truncate">
              <strong>{experience.title}</strong>
            </p>
          </Tooltip>
          <p>{experience.employer}</p>
        </div>
      </div>
      <p className="w-1/2">{experience.dates}</p>
    </li>
  );
};
