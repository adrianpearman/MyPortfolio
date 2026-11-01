import { cn } from "@/utils/functions/cn";

type TFooterProps = {
  className?: string;
};

export const Footer = ({ className = "" }: TFooterProps) => {
  return (
    <footer className={cn(className)}>
      <h2>Footer Section</h2>
    </footer>
  );
};
