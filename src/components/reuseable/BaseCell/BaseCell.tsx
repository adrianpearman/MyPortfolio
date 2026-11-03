import { cn } from "@/utils/functions/";

type TBaseCell = {
  children: React.ReactNode;
  className?: string;
};

export const BaseCell = ({ children, className = "" }: TBaseCell) => {
  return (
    <div
      className={cn("rounded-2xl bg-background-primary min-h-80", className)}
    >
      {children}
    </div>
  );
};
