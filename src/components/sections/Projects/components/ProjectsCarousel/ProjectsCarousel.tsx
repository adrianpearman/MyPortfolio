import { useMemo, useState } from "react";
import { BaseButton } from "@/components/reuseable";
import {
  ProjectCarouselButton,
  ProjectCarouselPill,
} from "@/components/sections/Projects/components";

import type { TProjectsData } from "@/utils/types";
import { cn } from "@/utils/functions";

type TProjectCarousel = {
  onShowAllProjects: () => void;
  projects: TProjectsData[];
};

const SUBSET_VALUE = 5;

export const ProjectsCarousel = ({
  onShowAllProjects,
  projects,
}: TProjectCarousel) => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const subsetOfProjects = useMemo(() => {
    if (!projects) return [];

    return projects.slice(0, SUBSET_VALUE);
  }, [projects]);

  const handleSetActiveProject = (increment: boolean) => {
    if (subsetOfProjects.length === 0) return;

    if (increment) {
      setActiveProjectIndex(
        activeProjectIndex === subsetOfProjects.length - 1
          ? 0
          : activeProjectIndex + 1,
      );
    } else {
      setActiveProjectIndex(
        activeProjectIndex === 0
          ? subsetOfProjects.length - 1
          : activeProjectIndex - 1,
      );
    }
  };

  const currentProject = useMemo(() => {
    return subsetOfProjects[activeProjectIndex];
  }, [activeProjectIndex, subsetOfProjects]);

  return (
    <div className="flex p-4 gap-2 text-text-primary-on-dark h-full">
      <div className="w-1/3 flex flex-col justify-between pt-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-heading-4 tracking-normal">
            {currentProject.title}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            {currentProject.stack.slice(0, 2).map((s, i) => (
              <ProjectCarouselPill
                content={s}
                key={`current-project-stack-item-${i}`}
              />
            ))}
          </div>
          <>
            {currentProject.liveLink !== "" && (
              <div className="flex gap-2">
                <BaseButton
                  ariaLabel={`A link to the ${currentProject.title} webpage`}
                  className="text-secondary-paragraph border-background-tertiary/30 py-1 px-2 w-fit"
                  href={currentProject.liveLink}
                  variant="tertiary"
                >
                  Open
                </BaseButton>
              </div>
            )}
          </>
          <div className="flex gap-2 items-center">
            <div className="flex gap-2">
              <ProjectCarouselButton
                direction="previous"
                onClick={() => handleSetActiveProject(false)}
              />
              <ProjectCarouselButton
                direction="next"
                onClick={() => handleSetActiveProject(true)}
              />
            </div>
            <p className="text-secondary-paragraph text-text-secondary-on-dark">
              {activeProjectIndex + 1} of {subsetOfProjects.length}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-2/3">
        <div className="flex-1 h-fit w-full relative">
          <img
            alt={`A image for project: ${currentProject.title}`}
            className="absolute inset-0 size-full rounded-xl object-cover backface-hidden"
            src={currentProject.projectImage}
          />
        </div>
        <div className="h-16 flex gap-2">
          {subsetOfProjects.map((project, i) => {
            const isActiveStyling =
              activeProjectIndex === i
                ? ""
                : "bg-linear-to-t from-background-quinary/70 to-background-quinary/70";
            return (
              <div
                className="h-full flex-1 rounded-2xl relative"
                key={`project-carousel-item-${i}`}
              >
                <img
                  alt={`An image for project: ${project.title}`}
                  className="absolute inset-0 size-full rounded-xl object-cover backface-hidden"
                  src={project.projectImage}
                />
                <div
                  aria-hidden="true"
                  className={cn("absolute inset-0 rounded-xl", isActiveStyling)}
                />
              </div>
            );
          })}
          <button
            aria-label={`Show all ${projects.length} projects`}
            className="h-full flex-1 bg-background-quinary text-text-primary-on-dark rounded-2xl flex font-heading text-heading-5 items-center justify-center cursor-pointer"
            onClick={onShowAllProjects}
            type="button"
          >
            +{projects.length - SUBSET_VALUE}
          </button>
        </div>
      </div>
    </div>
  );
};
