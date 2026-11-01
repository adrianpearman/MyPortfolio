import { BasePill } from "@/components/reuseable";

type TProjectCarouselPill = {
  content: string;
};

export const ProjectCarouselPill = ({ content }: TProjectCarouselPill) => {
  return (
    <BasePill className="bg-transparent border-background-tertiary/20">
      <p>{content}</p>
    </BasePill>
  );
};
