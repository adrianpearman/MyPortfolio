import { cn } from "@/utils/";

type TButtonProps = {
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

// Full class names so Tailwind's scanner can find them (no string interpolation).
const variantClasses = {
  primary:
    "bg-button-primary-background text-button-primary-text border-button-primary-background",
  secondary:
    "bg-button-secondary-background text-button-secondary-text border-button-primary-background",
  tertiary:
    "bg-button-tertiary-background text-button-tertiary-text border-button-secondary-background",
};

export const BaseButton = ({
  className = "",
  children,
  variant = "primary",
}: TButtonProps) => {
  return (
    <button
      className={cn(
        "rounded-2xl py-3.5 px-5 cursor-pointer border-2",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
