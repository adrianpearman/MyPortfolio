import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/vendor";
import { useGenerateFilteredLists } from "../hooks";

type TTimelineResponsibilitiesListProps = {
  responsibilities: string[];
};

const CUT_OFF_LIMIT = 4;

export const TimelineResponsibilitiesList = ({
  responsibilities,
}: TTimelineResponsibilitiesListProps) => {
  const [showAllValues, setShowAllValues] = useState<boolean>(false);
  const listRef = useRef<HTMLUListElement>(null);
  const [listHeight, setListHeight] = useState<number | "auto">("auto");

  const truncatedResponsibilityList = useGenerateFilteredLists({
    data: responsibilities,
    showAll: showAllValues,
    spliceLength: CUT_OFF_LIMIT,
  });

  // track the ul's natural height so the wrapper can animate between pixel values
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => setListHeight(list.offsetHeight));
    observer.observe(list);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-col gap-4">
      <motion.div
        className="overflow-hidden -ml-5 pl-5" // room for outside list markers
        initial={false}
        animate={{ height: listHeight }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <ul className="list-disc" ref={listRef}>
          {truncatedResponsibilityList.map((res, index) => (
            <li className="list" key={`responsibility-item-${index}`}>
              {res}
            </li>
          ))}
        </ul>
      </motion.div>
      {responsibilities.length > CUT_OFF_LIMIT && (
        <div className="flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setShowAllValues(!showAllValues)}
          >
            {showAllValues
              ? "Hide Responsibilities"
              : "Show More Responsibilities"}
          </Button>
        </div>
      )}
    </div>
  );
};
