import { BaseCell } from "@/components/reuseable";

import { ProjectsCarousel } from "@/components/sections/Projects/components";

export const Projects = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="w-1/4 bg-purple-cell-background">
        Tech Stack
      </BaseCell>
      <BaseCell className="w-3/4 bg-background-landing">
        <ProjectsCarousel />
      </BaseCell>
    </section>
  );
};
