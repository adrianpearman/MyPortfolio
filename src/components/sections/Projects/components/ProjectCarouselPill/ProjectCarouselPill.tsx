import { BasePill } from "@/components/reuseable";

type TProjectCarouselPill = {
  content: string;
};

export const ProjectCarouselPill = ({ content }: TProjectCarouselPill) => {
  return (
    <BasePill className="bg-transparent border-background-tertiary/30">
      <p>{content}</p>
    </BasePill>
  );
};
