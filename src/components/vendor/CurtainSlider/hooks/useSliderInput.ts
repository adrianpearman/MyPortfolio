import { useCallback, useRef } from "react";
import type { KeyboardEvent, PointerEvent } from "react";
import { SWIPE_THRESHOLD_RATIO } from "../utils/consts";
import { TUseSliderInput } from "../utils/types";

// Keyboard arrows and horizontal swipe on the container.
export const useSliderInput = ({
  drag,
  stageRef,
  next,
  prev,
  armAutoResume,
}: TUseSliderInput) => {
  const dragStartRef = useRef(0);
  const dragActiveRef = useRef(false);
  const dragAxisSizeRef = useRef(1);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        next();
        armAutoResume();
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        prev();
        armAutoResume();
      }
    },
    [next, prev, armAutoResume],
  );

  const handlePointerDown = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!drag) return;
      if ((e.target as Element).closest(".cs_pill")) {
        dragActiveRef.current = false;
        return;
      }
      dragActiveRef.current = true;
      dragStartRef.current = e.clientX;
      dragAxisSizeRef.current = stageRef.current
        ? stageRef.current.clientWidth
        : 1;
    },
    [drag],
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (!dragActiveRef.current) return;
      dragActiveRef.current = false;
      const pos = e.clientX;
      const delta = pos - dragStartRef.current;
      const threshold = dragAxisSizeRef.current * SWIPE_THRESHOLD_RATIO;
      if (Math.abs(delta) < threshold) return;
      if (delta < 0) next();
      else prev();
      armAutoResume();
    },
    [next, prev, armAutoResume],
  );

  return { handleKeyDown, handlePointerDown, handlePointerUp };
};
