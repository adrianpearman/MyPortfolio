import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { BaseButton } from "@/components/reuseable/BaseButton";
BaseButton;
import { DialogOverlay } from "./DialogOverlay";
import { DialogPortal } from "./DialogPortal";
import { cn } from "@/utils/functions";

type TDialogContent = DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
};

export const DialogContent = ({
  className,
  children,
  showCloseButton = true,
  ...props
}: TDialogContent) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-popover p-4 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            render={
              <BaseButton className="absolute top-2 right-2" variant="primary">
                X<span className="sr-only">Close</span>
              </BaseButton>
            }
          />
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};
