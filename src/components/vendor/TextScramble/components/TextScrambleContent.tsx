import { useRef } from "react";

import { useTextScramble } from "../hooks/useTextScramble";

type TTextScrambleContent = {
  content: string;
};

export const TextScrambleContent = ({ content }: TTextScrambleContent) => {
  const layerRef = useRef<HTMLSpanElement>(null);
  useTextScramble(layerRef, content);
  return (
    <>
      <span className="dual_scramble_sr">{content}</span>
      {/* Hidden spacer reserves width so the absolute layer doesn't shift layout */}
      <span aria-hidden="true" className="dual_scramble_spacer">
        {content}
      </span>
      <span ref={layerRef} aria-hidden="true" className="dual_scramble_layer">
        {content}
      </span>
    </>
  );
};
