import React from "react";
import { cn } from "@/utils";

type TSectionComponentProps = {
  children: React.ReactNode;
  className?: string;
  sectionEl?: boolean;
  style?: React.CSSProperties;
};

export const SectionComponent = ({
  children,
  className = "",
  sectionEl = true,
  style = {},
}: TSectionComponentProps) => {
  if (sectionEl) {
    return (
      <section
        className={cn(`min-h-200 h-auto w-full flex ${className}`)}
        style={style}
      >
        {children}
      </section>
    );
  }

  return (
    <div
      className={cn(`min-h-200 h-screen w-full flex ${className}`)}
      style={style}
    >
      {children}
    </div>
  );
};
