import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cn } from "@/utils";
import { buttonVariants } from "./buttonVariants";

import type { VariantProps } from "class-variance-authority";

type TButtonProps = ButtonPrimitive.Props & VariantProps<typeof buttonVariants>;

const Button = ({
  className,
  size = "default",
  variant = "default",
  ...props
}: TButtonProps) => {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
