import { Tooltip as TooltipPrimitive } from "@base-ui/react/tooltip";

export const TooltipBase = ({ ...props }: TooltipPrimitive.Root.Props) => {
  return <TooltipPrimitive.Root data-slot="tooltip" {...props} />;
};
