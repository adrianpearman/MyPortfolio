import {
  BaseButton,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/reuseable";
import { ProjectListContainer } from "./components";

import type { TProjectsData } from "@/utils/types";

type TProjectDialog = {
  projects: TProjectsData[];
};

export const ProjectDialog = ({ projects }: TProjectDialog) => {
  return (
    <Dialog>
      <DialogTrigger render={<BaseButton>Scrollable Content</BaseButton>} />
      <DialogContent className="max-w-[95%] h-8/10 bg-background-tertiary">
        <DialogHeader>
          <DialogTitle className="text-heading-1 tracking-[-0.5rem]">
            Projects
          </DialogTitle>
        </DialogHeader>
        <ProjectListContainer projects={projects} />
      </DialogContent>
    </Dialog>
  );
};
