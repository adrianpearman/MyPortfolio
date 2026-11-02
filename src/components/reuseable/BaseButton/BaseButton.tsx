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
    "bg-button-primary-background text-button-primary-text border-button-primary-background",
  secondary:
    "bg-button-secondary-background text-button-secondary-text border-button-primary-background",
  tertiary:
    "bg-button-tertiary-background text-button-tertiary-text border-button-secondary-background",
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
    "rounded-2xl py-3.5 px-5 cursor-pointer border-2",
    variantClasses[variant],
    className,
  );

  if (href) {
    return (
      <a
        aria-label={ariaLabel}
        className={cn("block text-center", classes)}
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
