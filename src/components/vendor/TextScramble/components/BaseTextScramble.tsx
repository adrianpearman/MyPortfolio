import type { TElementOptions } from "../utils/types";

type TBaseTextScramble = {
  children: React.ReactNode;
  element: TElementOptions;
};

export const BaseTextScramble = ({ children, element }: TBaseTextScramble) => {
  if (element === "h1") {
    return (
      <h1 className="dual_scramble_headline" data-anm-dual-scramble>
        {children}
      </h1>
    );
  }
  if (element === "h2") {
    return (
      <h2 className="dual_scramble_headline" data-anm-dual-scramble>
        {children}
      </h2>
    );
  }
  if (element === "h3") {
    return (
      <h3 className="dual_scramble_headline" data-anm-dual-scramble>
        {children}
      </h3>
    );
  }
  if (element === "p") {
    return (
      <p className="dual_scramble_headline" data-anm-dual-scramble>
        {children}
      </p>
    );
  }
};
