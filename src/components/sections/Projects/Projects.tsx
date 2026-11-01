import { BaseCell } from "@/components/reuseable";

export const Projects = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="w-1/4 bg-purple-cell-background">
        Tech Stack
      </BaseCell>
      <BaseCell className="w-3/4 bg-background-landing">Projects</BaseCell>
    </section>
  );
};
