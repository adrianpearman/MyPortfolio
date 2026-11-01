import { useState } from "react";
import ReactCardFlip from "react-card-flip";

type TFlipCardProps = {
  baseComponent: React.ReactNode;
  flippedComponent: React.ReactNode;
};

export const FlipCard = ({
  baseComponent,
  flippedComponent,
}: TFlipCardProps) => {
  const [flip, setFlip] = useState(false);

  if (!baseComponent || !flippedComponent) {
    return null;
  }

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
      <div onMouseEnter={() => setFlip(true)}>{baseComponent}</div>
      <div onMouseLeave={() => setFlip(false)}>{flippedComponent}</div>
    </ReactCardFlip>
  );
};
