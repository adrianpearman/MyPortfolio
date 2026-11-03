import { BaseCell, FadeInView } from "@/components/reuseable";
import {
  ProjectsCarousel,
  ProjectHeroContent,
} from "@/components/sections/Projects/components";

import { ProjectDialog } from "@/components/sections/Projects/components";
import { PROJECTS_DATA } from "@/data";

type TProjects = {
  isDialogOpen: boolean;
  onDialogOpenChange: (open: boolean) => void;
};

export const Projects = ({ isDialogOpen, onDialogOpenChange }: TProjects) => {
  return (
    <section className="w-full scroll-mt-12.5" id="projects">
      <FadeInView className="flex gap-2 max-md:flex-wrap">
        <BaseCell className="min-h-100 w-1/4 bg-linear-135 from-purple-cell-background to-purple-cell-background-2 text-text-primary-on-dark max-md:w-full max-md:min-h-48">
          <ProjectHeroContent />
        </BaseCell>
        <BaseCell className="min-h-100 w-3/4 bg-background-landing max-md:w-full">
          <ProjectsCarousel
            onShowAllProjects={() => onDialogOpenChange(true)}
            projects={PROJECTS_DATA}
          />
        </BaseCell>
      </FadeInView>
      <ProjectDialog
        onOpenChange={onDialogOpenChange}
        open={isDialogOpen}
        projects={PROJECTS_DATA}
      />
    </section>
  );
};
