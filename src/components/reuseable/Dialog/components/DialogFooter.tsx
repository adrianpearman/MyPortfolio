import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";

import { cn } from "@/utils/functions";
import { BaseButton } from "@/components/reuseable/BaseButton";

type TDialogFooter = React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
};

export const DialogFooter = ({
  className,
  showCloseButton = false,
  children,
  ...props
}: TDialogFooter) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "-mx-4 -mb-4 flex flex-col-reverse gap-2 rounded-b-xl border-t bg-muted/50 p-4 sm:flex-row sm:justify-end",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close
          render={<BaseButton variant="primary">Close</BaseButton>}
        />
      )}
    </div>
  );
};
