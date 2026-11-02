import { BaseCell } from "@/components/reuseable";
import {
  ProjectsCarousel,
  ProjectHeroContent,
} from "@/components/sections/Projects/components";

import { ProjectDialog } from "@/components/sections/Projects/components";
import { PROJECTS_DATA } from "@/data";

export const Projects = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="min-h-100 w-1/4 bg-linear-135 from-purple-cell-background to-purple-cell-background-2 text-text-primary-on-dark">
        <ProjectHeroContent />
      </BaseCell>
      <BaseCell className="min-h-100 w-3/4 bg-background-landing">
        <ProjectsCarousel projects={PROJECTS_DATA} />
      </BaseCell>
      <ProjectDialog projects={PROJECTS_DATA} />
    </section>
  );
};
