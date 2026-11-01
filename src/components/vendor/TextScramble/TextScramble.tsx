import { cn } from "@/utils";
import { BaseTextScramble, TextScrambleContent } from "./components";
import type { TElementOptions } from "./utils/types";
import "./style.css";

type TTextScrambleProps = {
  className?: string;
  content: string;
  element?: TElementOptions;
  showTextAdornment?: boolean;
};

export const TextScramble = ({
  className = "",
  content,
  element = "h1",
  showTextAdornment = false,
}: TTextScrambleProps) => {
  return (
    <div className={cn(className)}>
      <BaseTextScramble element={element}>
        <TextScrambleContent content={content} />
      </BaseTextScramble>
      {showTextAdornment && (
        <span className="bg-majorelle-blue-500 h-2.5 skew-x-[-20deg] w-20"></span>
      )}
    </div>
  );
};
