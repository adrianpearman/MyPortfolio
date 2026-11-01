type TGenerateDisplayOptionProps = {
  delay?: number;
  n: number;
};

const roundTo = (num: number) => {
  const factor = Math.pow(10, 2);
  return Math.round(num * factor) / factor;
};

export const generateDisplayOptions = ({
  delay = 0.6,
  n,
}: TGenerateDisplayOptionProps) => {
  return Array.from({ length: n + 1 }, (_, i) => i).map((x) =>
    roundTo(x * delay),
  );
};
