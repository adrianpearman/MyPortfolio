import { useRef, useState } from "react";
import {
  TooltipBase,
  TooltipContent,
  TooltipTrigger,
} from "@/components/reuseable/Tooltip/components";

type TTooltipProps = {
  children: React.ReactElement;
  content: string;
};

export const Tooltip = ({ children, content }: TTooltipProps) => {
  const titleRef = useRef<HTMLButtonElement>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  // Measured on open so it stays correct after resizes
  const handleTooltipOpenChange = (open: boolean) => {
    const title = titleRef.current;
    setIsTooltipOpen(open && !!title && title.scrollWidth > title.clientWidth);
  };
  return (
    <TooltipBase open={isTooltipOpen} onOpenChange={handleTooltipOpenChange}>
      <TooltipTrigger ref={titleRef} render={children} />
      <TooltipContent>
        <p>{content}</p>
      </TooltipContent>
    </TooltipBase>
  );
};
