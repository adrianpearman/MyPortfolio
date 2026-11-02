import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/reuseable";
import { ProjectListContainer } from "./components";

import type { TProjectsData } from "@/utils/types";

type TProjectDialog = {
  onOpenChange: (open: boolean) => void;
  open: boolean;
  projects: TProjectsData[];
};

export const ProjectDialog = ({
  onOpenChange,
  open,
  projects,
}: TProjectDialog) => {
  return (
    // "trap-focus" skips the scroll lock, which would cancel the smooth scroll from "See my work"
    <Dialog modal="trap-focus" onOpenChange={onOpenChange} open={open}>
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
