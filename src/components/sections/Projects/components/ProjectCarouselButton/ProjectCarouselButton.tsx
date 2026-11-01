import { BaseButton } from "@/components/reuseable";

type TProjectCarouselButton = {
  direction: "previous" | "next";
  onClick: () => void;
};

export const ProjectCarouselButton = ({
  direction,
  onClick,
}: TProjectCarouselButton) => {
  return (
    <BaseButton
      className="flex items-center justify-center p-0 size-7.5 border border-background-tertiary/20"
      onClick={onClick}
      variant="tertiary"
    >
      {direction === "previous" ? "<" : ">"}
    </BaseButton>
  );
};
