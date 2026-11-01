import { useMemo } from "react";

type TUseGenerateFilteredListsProp<T> = {
  data: T[];
  showAll: boolean;
  spliceLength: number;
};

export const useGenerateFilteredLists = <T>({
  data,
  showAll,
  spliceLength,
}: TUseGenerateFilteredListsProp<T>) => {
  return useMemo(
    () => (showAll ? data : data.slice(0, spliceLength)),
    [data, showAll, spliceLength],
  );
};
