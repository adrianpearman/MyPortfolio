import { motion, useScroll } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TimelineListItem, TimelineScroller } from "./components";
import { TTimelineEntry } from "./utils/types";
import { Button } from "@/components/vendor";
import { useGenerateFilteredLists } from "./hooks";

type TTimelineProp = {
  data: TTimelineEntry[];
};

export const Timeline = ({ data }: TTimelineProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);
  const [showAllRoles, setShowAllRoles] = useState<boolean>(false);
  // set only by the hide click, so mount/expand animations never move the page
  const scrollAfterCollapse = useRef<boolean>(false);

  // re-measure on resize so the wrapper animation and scroller track the list as roles toggle
  useEffect(() => {
    const list = ref.current;
    if (!list) return;
    const observer = new ResizeObserver(() => setHeight(list.offsetHeight));
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const filteredTimelineItems = useGenerateFilteredLists({
    data: data,
    showAll: showAllRoles,
    spliceLength: 3,
  });

  return (
    <div className="w-full md:px-10 z-10" ref={containerRef}>
      {/* overflow-clip, not hidden: hidden would break sticky positioning inside items */}
      <motion.div
        className="overflow-clip"
        initial={false}
        animate={{ height: height || "auto" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (!scrollAfterCollapse.current) return;
          scrollAfterCollapse.current = false;
          containerRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }}
      >
        <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
          {filteredTimelineItems.map((item, index) => (
            <TimelineListItem
              key={`timeline-item-${index}`}
              item={item}
              index={index}
            />
          ))}
          <TimelineScroller height={height} scrollYProgress={scrollYProgress} />
        </div>
      </motion.div>
      <div className="flex justify-center">
        <Button
          variant="secondary"
          onClick={() => {
            scrollAfterCollapse.current = showAllRoles;
            setShowAllRoles(!showAllRoles);
          }}
        >
          {showAllRoles ? "Hide Previous Roles" : "Show All Roles"}
        </Button>
      </div>
    </div>
  );
};
