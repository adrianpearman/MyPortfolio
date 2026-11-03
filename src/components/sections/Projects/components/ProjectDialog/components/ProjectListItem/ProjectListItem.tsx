import { BaseButton, BaseCell, Tooltip } from "@/components/reuseable";
import { ProjectCarouselPill } from "@/components/sections/Projects/components";
import { cn } from "@/utils/functions";
import type { TProjectsData } from "@/utils/types";

type TProjectListItem = {
  isLargeRowItemIndex: number;
  isOddRow: boolean;
  overRideFlex: boolean;
  rowItemData: TProjectsData;
  rowItemIndex: number;
};

export const ProjectListItem = ({
  isLargeRowItemIndex,
  isOddRow,
  overRideFlex,
  rowItemData,
  rowItemIndex,
}: TProjectListItem) => {
  const itemFlexBasis = () => {
    let style = "";
    if (isLargeRowItemIndex === rowItemIndex || overRideFlex) {
      style = "flex-1";
    } else {
      style = isOddRow ? "basis-1/3" : "basis-1/4";
    }

    return `${style}  max-md:basis-full`;
  };

  return (
    <BaseCell
      className={cn(
        itemFlexBasis(),
        "min-h-96 min-w-0 flex flex-col p-2 gap-2",
      )}
    >
      <div className="basis-7/10 relative">
        <img
          alt={`A image for project: ${rowItemData.title}`}
          className="absolute inset-0 size-full rounded-xl object-cover backface-hidden"
          src={rowItemData.projectImage}
        />
      </div>
      <div className="flex-1 flex flex-col justify-between align-middle">
        <div className="flex-1 min-w-0">
          <Tooltip content={rowItemData.title}>
            <h3 className="text-heading-5 w-full truncate">
              {rowItemData.title}
            </h3>
          </Tooltip>
        </div>
        <div className="flex gap-2">
          {rowItemData.stack.slice(0, 2).map((stack) => (
            <ProjectCarouselPill content={stack} />
          ))}
        </div>
        <>
          {rowItemData.liveLink !== "" && (
            <BaseButton
              ariaLabel={`A link to the ${rowItemData.title} webpage`}
              className="text-secondary-paragraph border-transparent py-1 px-2 w-fit"
              href={rowItemData.liveLink}
              variant="tertiary"
            >
              Open
            </BaseButton>
          )}
        </>
      </div>
    </BaseCell>
  );
};
