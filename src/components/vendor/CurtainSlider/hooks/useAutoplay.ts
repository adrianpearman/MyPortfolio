import { useCallback, useRef } from "react";
import { AUTO_RESUME_DELAY } from "../utils/consts";
import type { TUseAutoplay } from "../utils/types";

export const useAutoplay = ({
  auto,
  nextRef,
  reducedMotionRef,
}: TUseAutoplay) => {
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  const stopAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearInterval(autoTimerRef.current);
      autoTimerRef.current = null;
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    if (auto > 0 && !reducedMotionRef.current) {
      autoTimerRef.current = setInterval(() => {
        nextRef.current();
      }, auto * 1000);
    }
  }, [auto, stopAuto]);

  const armAutoResume = useCallback(() => {
    if (auto <= 0) return;
    stopAuto();
    clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(startAuto, AUTO_RESUME_DELAY * 1000);
  }, [auto, stopAuto, startAuto]);

  return { stopAuto, startAuto, armAutoResume, resumeTimerRef };
};
