import { useMemo, useState } from "react";
import { ProjectListItem } from "../ProjectListItem";

import type { TProjectsData } from "@/utils/types";

type TProjectListContainer = {
  projects: TProjectsData[];
};

export const ProjectListContainer = ({ projects }: TProjectListContainer) => {
  const ODD_ROW_MAX_LENGTH = 2;
  const EVEN_ROW_MAX_LENGTH = 3;
  // Rolled once so the large item doesn't move on re-render
  const [rowRolls] = useState(() => projects.map(() => Math.random()));

  const projectsBaseData = useMemo(() => {
    if (!projects) return [];

    const arr = projects;
    const matrixArr = [];

    const hasReachedLimit = ({
      index,
      limit,
    }: {
      index: number;
      limit: number;
    }) => index !== limit;

    for (let i = 0; i < arr.length; i++) {
      const matrixArrLength = matrixArr.length;
      const isOddMatrixIndex = matrixArrLength % 2 !== 0;
      const el = arr[i];

      if (matrixArrLength === 0) {
        matrixArr.push([el]);
      } else {
        const currentMatrixItem = matrixArr[matrixArrLength - 1];

        if (
          hasReachedLimit({
            index: currentMatrixItem.length,
            limit: isOddMatrixIndex ? ODD_ROW_MAX_LENGTH : EVEN_ROW_MAX_LENGTH,
          })
        ) {
          currentMatrixItem.push(el);
        } else {
          matrixArr.push([el]);
        }
      }
    }

    return matrixArr;
  }, [projects]);

  return (
    <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4 flex flex-col gap-2">
      {projectsBaseData.map((row, i) => {
        const ODD_ROW = i % 2 === 0;
        const VALUES_PER_ROW = ODD_ROW ? 2 : 3;
        const SET_LARGE_ROW_ITEM = Math.floor(rowRolls[i] * VALUES_PER_ROW);

        const overRideFlexValue =
          (ODD_ROW && row.length < ODD_ROW_MAX_LENGTH) ||
          (!ODD_ROW && row.length < EVEN_ROW_MAX_LENGTH);
        return (
          <div className="flex flex-wrap gap-2" key={`project-row-${i}`}>
            {row.map((rowItem, j) => {
              return (
                <ProjectListItem
                  key={`project-row-item-${j}`}
                  isLargeRowItemIndex={SET_LARGE_ROW_ITEM}
                  isOddRow={ODD_ROW}
                  overRideFlex={overRideFlexValue}
                  rowItemData={rowItem}
                  rowItemIndex={j}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
