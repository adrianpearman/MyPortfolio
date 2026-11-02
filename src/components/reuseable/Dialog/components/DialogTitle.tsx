import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/utils/functions";

export const DialogTitle = ({
  className,
  ...props
}: DialogPrimitive.Title.Props) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "cn-font-heading text-base leading-none font-medium",
        className,
      )}
      {...props}
    />
  );
};
