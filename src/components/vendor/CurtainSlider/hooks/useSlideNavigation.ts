import { useCallback, useRef } from "react";
import gsap from "gsap";
import {
  INCOMING_SHADE,
  LABEL_DUR,
  OUT_SHADE,
  STRIP_DUR_RATIO,
  TITLE_IN_DUR,
  TITLE_OUT_DUR,
  ZOOM_FROM,
} from "../utils/consts";
import {
  clearStripClips,
  indexLabel,
  rollIndex,
  setLayerVisible,
  swapChars,
} from "../utils/functions";
import type { TUseSlideNavigationProps } from "../utils/types";

export const useSlideNavigation = ({
  announce,
  barDur,
  clampedColumns,
  currentIndexRef,
  data,
  duration,
  inFlightRef,
  onChange,
  refsRef,
  resolvedEase,
  stagger,
}: TUseSlideNavigationProps) => {
  const zTopRef = useRef(0);
  const goToSeqRef = useRef(0);
  const lastGoToRef = useRef(0);

  // direction: 1 = next, -1 = prev
  const goTo = useCallback(
    (newIndex: number, direction: number) => {
      const refs = refsRef.current;
      if (!refs || newIndex === currentIndexRef.current) return;
      const now = performance.now();
      if (now - lastGoToRef.current < 150) return;
      lastGoToRef.current = now;

      // Reversing onto the slide that is mid-demotion: snap the in-flight
      // transition to done first so re-clipping it never flashes the stage.
      if (inFlightRef.current && newIndex === inFlightRef.current.outIndex) {
        inFlightRef.current.tl.progress(1);
        inFlightRef.current = null;
      }

      const outIndex = currentIndexRef.current;
      currentIndexRef.current = newIndex;
      const slide = data[newIndex];

      const seq = ++goToSeqRef.current;
      const tl = gsap.timeline({
        onComplete: () => {
          if (inFlightRef.current && inFlightRef.current.tl === tl)
            inFlightRef.current = null;
        },
      });
      inFlightRef.current = { tl, outIndex };

      // --- background layers: the OUTGOING slide's columns exit through
      // their strip masks with a travel-signed stagger (the curtain), while
      // the incoming slide sits whole beneath, zoom-settling + brightening.
      const outLayer = refs.layers[outIndex];
      const inLayer = refs.layers[newIndex];
      const outParts = refs.layerParts[outIndex];
      const inParts = refs.layerParts[newIndex];

      // outgoing rides ON TOP of the incoming; monotonically increasing
      // pairs keep the newest transition's stack order under spam
      zTopRef.current += 2;
      outLayer.style.zIndex = String(data.length + zTopRef.current + 1);
      inLayer.style.zIndex = String(data.length + zTopRef.current);
      setLayerVisible({ layer: outLayer, visible: true });
      setLayerVisible({ layer: inLayer, visible: true });

      // an interrupted exit can leave partial clips on the layer that is now
      // incoming - clear them before it shows whole beneath the curtain
      gsap.killTweensOf(inParts.strips);
      gsap.killTweensOf(inLayer);
      gsap.killTweensOf(inParts.shades);
      clearStripClips(inParts);
      // Zoom the LAYER, not the 12 imgs inside it: scaling twelve
      // stage-sized dpr2 textures per frame forces compositor re-rasters
      // (checkerboard-rectangle flicker on 120Hz retina); one layer
      // transform is compositor-cheap and visually identical while the
      // incoming plate is unclipped.
      gsap.set(inLayer, {
        scale: ZOOM_FROM,
        transformOrigin: "50% 50%",
        force3D: true,
      });
      gsap.set(inParts.shades, { opacity: INCOMING_SHADE });

      const stripDur = duration * STRIP_DUR_RATIO;
      const stripStagger =
        (duration - stripDur) / Math.max(1, clampedColumns - 1);

      // The curtain: every outgoing column stays in place while its clip
      // edge wipes sideways, staggered across the row. The wipe side and
      // the stagger both follow travel: next wipes + staggers left -> right,
      // prev right -> left. Only the inset SIDE is a static template - the
      // tween drives the single --csc var (never tween inset strings - they
      // collapse and freeze).
      gsap.killTweensOf(outParts.strips);
      for (let s = 0; s < outParts.strips.length; s++) {
        outParts.strips[s].style.clipPath =
          direction > 0
            ? "inset(0% 0% 0% var(--csc, 0%))"
            : "inset(0% var(--csc, 0%) 0% 0%)";
      }
      gsap.set(outParts.strips, { "--csc": "0%" });
      // target overshoots 100%: the drift ease spends its long tail on the
      // last ~1% of distance, which parks a 1px antialiased sliver at the
      // column edge until the tween ends (it reads as a flicker). Crossing
      // the visually-empty point at 100% mid-ease kills the sliver while
      // the tail plays out invisibly (an inset past 100% renders nothing).
      tl.to(
        outParts.strips,
        {
          "--csc": "105%",
          duration: stripDur,
          ease: resolvedEase,
          stagger: direction > 0 ? stripStagger : -stripStagger,
          overwrite: true,
        },
        0,
      );
      gsap.killTweensOf(outParts.shades);
      tl.to(
        outParts.shades,
        {
          opacity: OUT_SHADE,
          duration: stripDur * 0.8,
          ease: "power1.in",
          stagger: direction > 0 ? stripStagger : -stripStagger,
          overwrite: "auto",
        },
        0,
      );

      // incoming settles underneath for the full transition length
      tl.to(
        inLayer,
        {
          scale: 1,
          duration: duration * 1.05,
          ease: resolvedEase,
          force3D: true,
        },
        0,
      );
      tl.to(
        inParts.shades,
        {
          opacity: 0,
          duration: duration * 1.05,
          ease: resolvedEase,
        },
        0,
      );

      tl.call(
        () => {
          // Only the newest transition may settle the stage: under spam, an
          // older tl completing late would otherwise restack layers a newer
          // transition is actively using.
          if (seq !== goToSeqRef.current) return;
          refs.layers.forEach((layer, i) => {
            const parts = refs.layerParts[i];
            gsap.killTweensOf(parts.strips);
            gsap.killTweensOf(layer);
            gsap.killTweensOf(parts.shades);
            clearStripClips(parts);
            gsap.set(layer, { scale: 1 });
            gsap.set(parts.shades, { opacity: 0 });
            setLayerVisible({ layer, visible: i === newIndex });
            layer.style.zIndex =
              i === newIndex ? String(data.length) : String(i);
          });
        },
        undefined,
        duration,
      );

      // --- texts: outgoing chars keep animating on an overlay line while the
      // incoming line staggers in - both always complete. ---
      swapChars({
        el: refs.titleEl,
        newText: slide.title || "",
        lineClass: "cs_title_line",
        charClass: "cs_title_char",
        outVars: {
          yPercent: direction > 0 ? -120 : 120,
          y: 0,
          duration: TITLE_OUT_DUR,
          ease: "annnimateInOut",
          stagger: direction > 0 ? stagger : -stagger,
          force3D: true,
          overwrite: true,
        },
        inVars: {
          from: { yPercent: direction > 0 ? 120 : -120, y: 0 },
          to: {
            yPercent: 0,
            y: 0,
            duration: TITLE_IN_DUR,
            ease: "annnimateInOut",
            stagger: direction > 0 ? stagger : -stagger,
            force3D: true,
            overwrite: true,
          },
        },
      });

      swapChars({
        el: refs.labelEl,
        newText: slide.label || "",
        lineClass: "cs_label_line",
        charClass: "cs_title_char",
        outVars: {
          yPercent: direction > 0 ? -110 : 110,
          y: 0,
          duration: LABEL_DUR * 0.7,
          ease: "annnimateInOut",
          force3D: true,
          overwrite: true,
        },
        inVars: {
          from: { yPercent: direction > 0 ? 110 : -110, y: 0 },
          to: {
            yPercent: 0,
            y: 0,
            duration: LABEL_DUR,
            ease: "annnimateInOut",
            force3D: true,
            overwrite: true,
          },
        },
      });

      rollIndex({ el: refs.indexEl, value: indexLabel(newIndex) });

      gsap.set(refs.progressFill, { transformOrigin: "left center" });
      tl.to(
        refs.progressFill,
        {
          scaleX: (newIndex + 1) / data.length,
          duration: barDur,
          ease: resolvedEase,
          force3D: true,
          overwrite: "auto",
        },
        0,
      );

      announce();
      onChange?.({ index: newIndex, direction, slide });
    },
    [
      data,
      duration,
      clampedColumns,
      resolvedEase,
      stagger,
      barDur,
      announce,
      onChange,
    ],
  );

  const next = useCallback(() => {
    const i = (currentIndexRef.current + 1) % data.length;
    goTo(i, 1);
  }, [data.length, goTo]);

  const prev = useCallback(() => {
    const i = (currentIndexRef.current - 1 + data.length) % data.length;
    goTo(i, -1);
  }, [data.length, goTo]);

  return { goTo, next, prev };
};
