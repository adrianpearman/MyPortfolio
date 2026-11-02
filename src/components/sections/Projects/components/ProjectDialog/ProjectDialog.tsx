import { motion, useReducedMotion } from "motion/react";

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
  const shouldReduceMotion = useReducedMotion();

  return (
    // "trap-focus" skips the scroll lock, which would cancel the smooth scroll from "See my work"
    <Dialog modal="trap-focus" onOpenChange={onOpenChange} open={open}>
      <DialogContent
        className="max-w-[95%] h-8/10 bg-background-tertiary"
        render={
          <motion.div
            animate={{ opacity: 1, scale: 1, y: 0 }}
            initial={{
              opacity: 0,
              scale: shouldReduceMotion ? 1 : 0.96,
              y: shouldReduceMotion ? 0 : 24,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        }
      >
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
