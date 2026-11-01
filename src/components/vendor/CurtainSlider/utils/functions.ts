import gsap from "gsap";
import { DIGIT_DUR, VIEWPORT_QUERIES } from "./consts";
import type {
  DigitColumn,
  IndexDisplayArgs,
  LayoutStripsArgs,
  LayerParts,
  SplitCharsArgs,
  SwapCharsArgs,
  CharLineArgs,
} from "./types";

export const indexLabel = (i: number): string => {
  return String(i + 1).padStart(2, "0");
};

export const isDisabledOnViewport = (
  disable?: string | string[] | null | false,
): boolean => {
  if (!disable) return false;
  const list = Array.isArray(disable) ? disable : String(disable).split(",");
  return list.some((v) => {
    const q =
      VIEWPORT_QUERIES[String(v).trim() as keyof typeof VIEWPORT_QUERIES];
    return !!q && window.matchMedia(q).matches;
  });
};

export const buildCharLine = ({
  text,
  lineClass,
  charClass,
}: CharLineArgs): HTMLSpanElement => {
  const line = document.createElement("span");
  line.className = lineClass;
  text.split("").forEach((ch) => {
    const span = document.createElement("span");
    span.className = charClass;
    // inline-block char spans collapse a plain space to zero width -
    // swap word gaps for a non-breaking space so they keep their width
    span.textContent = ch === " " ? "\xA0" : ch;
    line.appendChild(span);
  });
  return line;
};

export const splitChars = ({
  el,
  text,
  lineClass,
  charClass,
}: SplitCharsArgs): HTMLElement[] => {
  el.innerHTML = "";
  const line = buildCharLine({ text, lineClass, charClass });
  el.appendChild(line);
  return Array.from(line.querySelectorAll<HTMLElement>("." + charClass));
};

// Swap masked char content without clearing the element: the outgoing
// line is lifted onto an absolute overlay (its own mask keeps clipping)
// and removed only when its exit tween completes, so both the out and
// the in animation always run to the end.
export const swapChars = ({
  el,
  newText,
  lineClass,
  charClass,
  outVars,
  inVars,
}: SwapCharsArgs): HTMLElement[] => {
  const oldLine = el.querySelector("." + lineClass + ":not(.cs_line_out)");
  if (oldLine) {
    oldLine.classList.add("cs_line_out");
    const oldChars = oldLine.querySelectorAll("." + charClass);
    gsap.to(
      oldChars,
      Object.assign(
        {
          onComplete: () => {
            oldLine.remove();
          },
        },
        outVars,
      ),
    );
  }
  const line = buildCharLine({ text: newText, lineClass, charClass });
  el.appendChild(line);
  const chars = Array.from(line.querySelectorAll<HTMLElement>("." + charClass));
  // Park FIRST via set: a delayed fromTo does NOT immediateRender, so the
  // incoming line would sit visible at rest during the delay and "jump".
  gsap.set(chars, inVars.from);
  gsap.to(chars, inVars.to);
  return chars;
};

export const buildDigitColumn = (digitChar: string): DigitColumn => {
  const wrap = document.createElement("span") as DigitColumn;
  wrap.className = "cs_digit_wrap";
  const roller = document.createElement("span");
  roller.className = "cs_digit_roller";
  for (let d = 0; d <= 9; d++) {
    const s = document.createElement("span");
    s.textContent = String(d);
    roller.appendChild(s);
  }
  wrap.appendChild(roller);
  wrap._digit = parseInt(digitChar, 10);
  wrap._roller = roller;
  return wrap;
};

export const setIndexDisplay = ({
  el,
  valueString,
  total,
}: IndexDisplayArgs): void => {
  el.innerHTML = "";
  valueString.split("").forEach((ch) => {
    const col = buildDigitColumn(ch);
    gsap.set(col._roller, { y: -col._digit + "em" });
    el.appendChild(col);
  });
  const divider = document.createElement("span");
  divider.className = "cs_index_divider";
  divider.textContent = "/";
  el.appendChild(divider);
  const totalEl = document.createElement("span");
  totalEl.className = "cs_index_total";
  totalEl.textContent = indexLabel(total - 1);
  el.appendChild(totalEl);
};

export const rollIndex = ({
  el,
  value,
}: {
  el: HTMLElement;
  value: string;
}): void => {
  const cols = Array.from(el.querySelectorAll<DigitColumn>(".cs_digit_wrap"));
  value.split("").forEach((d, i) => {
    const col = cols[i];
    if (!col) return;
    const target = parseInt(d, 10);
    col._digit = target;
    gsap.to(col._roller, {
      y: -target + "em",
      duration: DIGIT_DUR,
      ease: "expo.inOut",
      force3D: true,
      overwrite: true,
    });
  });
};

// Each layer is built from COLUMNS strips: an overflow-hidden mask with a
// stage-congruent inner (the inner is exactly the stage rect, offset so
// the strips reassemble the full cover-fit photo). Strip edges are
// integer-snapped pixels, and every strip except the last OVERLAPS its
// right neighbor by 1px: under a fractional effective scale (preview
// scale-to-fit, browser zoom, odd dpr) exactly-tiled edges antialias
// against the stage and leak hairline seams between columns. The inner is
// stage-congruent, so the overlapped pixel renders identical image
// content - invisible, but the seam can never open.
export const layoutStrips = ({
  stage,
  layerParts,
  columns,
}: LayoutStripsArgs): void => {
  const w = stage.clientWidth || 1;
  const edges: number[] = [];
  for (let c = 0; c <= columns; c++) edges.push(Math.round((c * w) / columns));
  layerParts.forEach((parts) => {
    for (let c = 0; c < columns; c++) {
      const strip = parts.strips[c];
      const inner = parts.inners[c];
      const overlap = c < columns - 1 ? 1 : 0;
      strip.style.left = edges[c] + "px";
      strip.style.width = edges[c + 1] - edges[c] + overlap + "px";
      inner.style.left = -edges[c] + "px";
      inner.style.width = w + "px";
    }
  });
};

export const setLayerVisible = ({
  layer,
  visible,
}: {
  layer: HTMLElement;
  visible: boolean;
}): void => {
  layer.style.visibility = visible ? "" : "hidden";
};

// A clip edge is antialiased even at inset(0) and leaks a hairline of
// the layer beneath - settled strips must carry NO clip at all.
export const clearStripClips = (parts: LayerParts): void => {
  for (let s = 0; s < parts.strips.length; s++) {
    parts.strips[s].style.clipPath = "none";
    parts.strips[s].style.removeProperty("--csc");
  }
};
