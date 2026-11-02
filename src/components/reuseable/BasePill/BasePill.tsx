import { cn } from "@/utils/functions";

type TBasePillProps = {
  children?: React.ReactNode;
  className?: string;
};

export const BasePill = ({ children, className }: TBasePillProps) => {
  return (
    <div
      className={cn(
        "px-4 py-2 bg-background-primary text-text-primary border border-background-tertiary rounded-2xl text-secondary-paragraph",
        className,
      )}
    >
      {children}
    </div>
  );
};
