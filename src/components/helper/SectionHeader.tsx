import { cn } from "@/utils";
import { TextScramble } from "@/components/vendor";

type TSectionHeaderProps = {
  className?: string;
  content: string;
  showAnimation?: boolean;
  subHeader?: boolean;
};

export const SectionHeader = ({
  className = "",
  content,
  showAnimation = false,
  subHeader = false,
}: TSectionHeaderProps) => {
  if (subHeader) {
    if (showAnimation) {
      return (
        <TextScramble
          className={cn(
            "flex flex-col items-center justify-center font-main-heading text-section-sub-header",
            className,
          )}
          content={content}
          element="h3"
        />
      );
    }

    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center font-main-heading text-section-sub-header",
          className,
        )}
      >
        <h3>{content}</h3>
      </div>
    );
  }

  if (showAnimation) {
    return (
      <TextScramble
        className={cn(
          "flex flex-col items-center justify-center font-main-heading text-section-header",
          className,
        )}
        content={content}
        element="h3"
        showTextAdornment={true}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center font-main-heading text-section-header",
        className,
      )}
    >
      <h2>{content}</h2>
      <span className="bg-majorelle-blue-500 h-2.5 skew-x-[-20deg] w-20"></span>
    </div>
  );
};
