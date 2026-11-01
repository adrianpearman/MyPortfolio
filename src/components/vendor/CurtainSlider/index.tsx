import { useRef, useEffect } from "react";
import type { MouseEvent } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { ARROW_HOVER_DUR, ARROW_PRESS_DUR } from "./utils/consts";
import { isDisabledOnViewport, layoutStrips } from "./utils/functions";
import type {
  CurtainSliderProps,
  InFlight,
  LayerParts,
  SliderRefs,
} from "./utils/types";
import {
  useAutoplay,
  useSlideDisplay,
  useSlideNavigation,
  useSliderInput,
} from "./hooks";
import "./style.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, CustomEase);
  if (!CustomEase.get("annnimate")) {
    CustomEase.create("annnimate", "M0,0 C0.3,0.9 0.1,1 1,1");
  }
  if (!CustomEase.get("annnimateInOut")) {
    CustomEase.create("annnimateInOut", "M0,0 C0.7,0 0.16,1 1,1");
  }
}

export const CurtainSlider = ({
  className = "",
  data,
  duration = 1.1,
  ease = "annnimate",
  columns = 12,
  auto = 0,
  drag = true,
  stagger = 0.0125,
  disable = undefined,
  onChange = undefined,
}: CurtainSliderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const labelElRef = useRef<HTMLDivElement>(null);
  const titleElRef = useRef<HTMLHeadingElement>(null);
  const indexElRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const prevBtnRef = useRef<HTMLButtonElement>(null);
  const nextBtnRef = useRef<HTMLButtonElement>(null);
  const liveRegionRef = useRef<HTMLDivElement>(null);

  const clampedColumns = Math.max(
    2,
    Math.min(24, parseInt(String(columns), 10) || 12),
  );
  const resolvedEase =
    ease === "annnimate" || ease === "annnimateInOut"
      ? ease
      : ease || "expo.out";
  const barDur = duration * 0.8;

  const currentIndexRef = useRef(0);
  const refsRef = useRef<SliderRefs | null>(null);
  const inFlightRef = useRef<InFlight | null>(null);
  const reducedMotionRef = useRef(false);
  // the autoplay interval needs a stable call-through to the latest next()
  const nextRef = useRef<() => void>(() => {});

  if (!data) return;

  const { announce, settleCurrent } = useSlideDisplay({
    data,
    refsRef,
    currentIndexRef,
  });
  const { stopAuto, startAuto, armAutoResume, resumeTimerRef } = useAutoplay({
    auto,
    nextRef,
    reducedMotionRef,
  });
  const { next, prev } = useSlideNavigation({
    data,
    refsRef,
    currentIndexRef,
    inFlightRef,
    duration,
    clampedColumns,
    resolvedEase,
    stagger,
    barDur,
    announce,
    onChange,
  });
  nextRef.current = next;
  const { handleKeyDown, handlePointerDown, handlePointerUp } = useSliderInput({
    drag,
    stageRef,
    next,
    prev,
    armAutoResume,
  });

  const { contextSafe } = useGSAP(
    () => {
      if (isDisabledOnViewport(disable)) return;
      const stage = stageRef.current;
      const container = containerRef.current;
      if (!stage || !container) return;

      stage.innerHTML = "";

      const layerWrap = document.createElement("div");
      layerWrap.className = "cs_layers";
      const layerParts: LayerParts[] = [];
      const layers = data.map((slide, i) => {
        const layer = document.createElement("div");
        layer.className = "cs_layer";
        layer.style.zIndex = String(i);
        layer.style.visibility = i === currentIndexRef.current ? "" : "hidden";
        const parts: LayerParts = {
          strips: [],
          inners: [],
          imgs: [],
          shades: [],
        };
        for (let c = 0; c < clampedColumns; c++) {
          const strip = document.createElement("div");
          strip.className = "cs_strip";
          const inner = document.createElement("div");
          inner.className = "cs_strip_inner";
          const img = document.createElement("img");
          img.className = "cs_layer_img";
          img.src = slide.src;
          img.alt = c === 0 ? slide.alt || "" : "";
          img.loading = "eager";
          const shade = document.createElement("div");
          shade.className = "cs_shade";
          shade.setAttribute("aria-hidden", "true");
          inner.appendChild(img);
          strip.appendChild(inner);
          strip.appendChild(shade);
          layer.appendChild(strip);
          parts.strips.push(strip);
          parts.inners.push(inner);
          parts.imgs.push(img);
          parts.shades.push(shade);
        }
        layerParts.push(parts);
        layerWrap.appendChild(layer);
        return layer;
      });

      const scrim = document.createElement("div");
      scrim.className = "cs_scrim";
      scrim.setAttribute("aria-hidden", "true");

      stage.appendChild(layerWrap);
      stage.appendChild(scrim);

      refsRef.current = {
        layers,
        layerParts,
        // refs are attached by the time useGSAP runs
        labelEl: labelElRef.current!,
        titleEl: titleElRef.current!,
        indexEl: indexElRef.current!,
        progressFill: progressFillRef.current!,
        prevBtn: prevBtnRef.current!,
        nextBtn: nextBtnRef.current!,
        liveRegion: liveRegionRef.current!,
      };

      layoutStrips({ stage, layerParts, columns: clampedColumns });
      settleCurrent();

      container.setAttribute("role", "region");
      container.setAttribute("aria-roledescription", "carousel");
      container.setAttribute(
        "aria-label",
        data[currentIndexRef.current].title || "",
      );
      container.setAttribute(
        "tabindex",
        container.getAttribute("tabindex") || "0",
      );

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: reduce)", () => {
        reducedMotionRef.current = true;
        gsap.globalTimeline.timeScale(20);
      });

      startAuto();

      return () => {
        mm.revert();
        stopAuto();
        clearTimeout(resumeTimerRef.current);
        if (inFlightRef.current) inFlightRef.current.tl.kill();
        layers.forEach((_layer, i) => {
          gsap.killTweensOf(layerParts[i].strips);
          gsap.killTweensOf(layerParts[i].imgs);
        });
        if (progressFillRef.current) gsap.killTweensOf(progressFillRef.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    { scope: containerRef, dependencies: [data, clampedColumns, disable] },
  );

  const handlePrevClick = contextSafe(() => {
    prev();
    armAutoResume();
  });
  const handleNextClick = contextSafe(() => {
    next();
    armAutoResume();
  });

  const animateArrowHoverIn = contextSafe(
    (e: MouseEvent<HTMLButtonElement>, dir: number) => {
      const icon = e.currentTarget.querySelector(".cs_arrow_icon");
      gsap.to(icon, {
        x: dir * 3,
        duration: ARROW_HOVER_DUR,
        ease: "back.out(2)",
        overwrite: "auto",
        force3D: true,
      });
    },
  );
  const animateArrowHoverOut = contextSafe(
    (e: MouseEvent<HTMLButtonElement>) => {
      const icon = e.currentTarget.querySelector(".cs_arrow_icon");
      gsap.to(icon, {
        x: 0,
        duration: ARROW_HOVER_DUR,
        ease: "expo.out",
        overwrite: "auto",
        force3D: true,
      });
    },
  );
  const animateArrowPressDown = contextSafe(
    (e: MouseEvent<HTMLButtonElement>) => {
      gsap.to(e.currentTarget, {
        scale: 0.92,
        duration: ARROW_PRESS_DUR,
        ease: "power2.out",
        overwrite: "auto",
        force3D: true,
      });
    },
  );
  const animateArrowPressUp = contextSafe(
    (e: MouseEvent<HTMLButtonElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: ARROW_PRESS_DUR,
        ease: "back.out(2.5)",
        overwrite: "auto",
        force3D: true,
      });
    },
  );
  const animateArrowPressLeave = contextSafe(
    (e: MouseEvent<HTMLButtonElement>) => {
      gsap.to(e.currentTarget, {
        scale: 1,
        duration: ARROW_PRESS_DUR,
        ease: "power2.out",
        overwrite: "auto",
        force3D: true,
      });
    },
  );

  // resize: strip edges are integer-snapped pixels - re-derive on every resize
  useEffect(() => {
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    function handleResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!refsRef.current || !stageRef.current) return;
        layoutStrips({
          stage: stageRef.current,
          layerParts: refsRef.current.layerParts,
          columns: clampedColumns,
        });
      }, 150);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", handleResize);
    };
  }, [clampedColumns]);

  useEffect(() => {
    function handleVisibility() {
      if (document.hidden) {
        gsap.globalTimeline.pause();
        stopAuto();
      } else {
        gsap.globalTimeline.resume();
        startAuto();
      }
    }
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [stopAuto, startAuto]);

  return (
    <div
      ref={containerRef}
      className={`cs_wrap${className ? " " + className : ""}`}
      data-anm-curtain-slider
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onFocus={stopAuto}
      onBlur={startAuto}
    >
      <div className="cs_stage" ref={stageRef} data-anm-cs-stage>
        {/* Layer stack, scrim built imperatively above (cover-fit column
            strips reassembled from live img sources); text/UI chrome below
            is declarative so refs stay stable across re-renders. */}
      </div>

      <div className="cs_label" ref={labelElRef} />
      <h2 className="cs_title" ref={titleElRef} />
      <div className="cs_index" ref={indexElRef} aria-hidden="true" />

      <div className="cs_progress" aria-hidden="true">
        <div className="cs_progress_fill" ref={progressFillRef} />
      </div>

      <div className="cs_pill" role="group" aria-label="Slide controls">
        <button
          ref={prevBtnRef}
          type="button"
          className="cs_arrow"
          aria-label="Previous slide"
          onClick={handlePrevClick}
          onMouseEnter={(e) => animateArrowHoverIn(e, -1)}
          onMouseLeave={animateArrowHoverOut}
          onPointerDown={animateArrowPressDown}
          onPointerUp={animateArrowPressUp}
          onPointerLeave={animateArrowPressLeave}
        >
          <svg
            className="cs_arrow_icon"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M10 3L5 8L10 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          ref={nextBtnRef}
          type="button"
          className="cs_arrow"
          aria-label="Next slide"
          onClick={handleNextClick}
          onMouseEnter={(e) => animateArrowHoverIn(e, 1)}
          onMouseLeave={animateArrowHoverOut}
          onPointerDown={animateArrowPressDown}
          onPointerUp={animateArrowPressUp}
          onPointerLeave={animateArrowPressLeave}
        >
          <svg
            className="cs_arrow_icon"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="cs_live" aria-live="polite" ref={liveRegionRef} />
    </div>
  );
};
