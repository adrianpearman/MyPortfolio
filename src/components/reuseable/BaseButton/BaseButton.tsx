import { cn } from "@/utils/functions";

type TButtonProps = {
  ariaLabel?: string;
  className?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "tertiary";
};

// Full class names so Tailwind's scanner can find them (no string interpolation).
const variantClasses = {
  primary:
    "bg-button-primary-background hover:bg-background-quinary  text-button-primary-text border-button-primary-background",
  secondary:
    "bg-button-secondary-background hover:bg-background-quinary text-button-secondary-text hover:text-button-primary-text  border-button-primary-background hover:border-button-primary-text",
  tertiary:
    "bg-button-tertiary-background hover:bg-background-quinary  text-button-tertiary-text hover:text-button-primary-text border-button-secondary-background hover:border-button-primary-text",
};

export const BaseButton = ({
  ariaLabel,
  className = "",
  children,
  href,
  onClick,
  variant = "primary",
}: TButtonProps) => {
  const classes = cn(
    "rounded-xl py-3.5 px-5 cursor-pointer border-1",
    variantClasses[variant],
    "transition duration-200 ease-in",
    className,
  );

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={cn("block text-center ", classes)}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <button aria-label={ariaLabel} className={classes} onClick={onClick}>
      {children}
    </button>
  );
};
