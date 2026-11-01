import { cn } from "@/utils";
import { TTimelineEntry } from "../utils/types";
import { TimelineResponsibilitiesList } from "./TimelineResponsibilitiesList";

type TTimelineListItemProps = {
  index: number;
  item: TTimelineEntry;
};

export const TimelineListItem = ({ index, item }: TTimelineListItemProps) => {
  const { dates, employer, iconColor, location, responsibilities, title } =
    item;
  return (
    <div
      className={cn(
        "flex justify-start pt-10 md:pt-28 md:gap-10",
        index === 0 && "pt-10 md:pt-10",
      )}
      key={`timeline-item-${index}`}
    >
      <div className="sticky flex flex-col md:flex-row z-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
          {/* This is the circle next to the item */}
          <div
            className={cn(
              "size-4 rotate-45 rounded-sm bg-neutral-200 p-2",
              iconColor,
            )}
          />
        </div>
        <div className="flex flex-col md:pl-20 ">
          <h3 className="hidden md:block font-main-heading text-section-sub-header">
            {employer}
          </h3>
          <h4>
            <span className="font-main-heading text-section-tertiary-header">
              Title
            </span>
            : {title}
          </h4>
          <h4>
            <span className="font-main-heading text-section-tertiary-header">
              Dates
            </span>
            : {dates}
          </h4>
          <h4>
            <span className="font-main-heading text-section-tertiary-header">
              Location
            </span>
            : {location}
          </h4>
        </div>
      </div>

      <TimelineResponsibilitiesList responsibilities={responsibilities} />
    </div>
  );
};
