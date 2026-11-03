import { useContext, type KeyboardEvent, type MouseEvent } from "react";
import { PortfolioContext } from "@/components/context/PortfolioContext/PortfolioContext";

type TLinkScrollProps = {
  height?: number;
  linkName: string;
  scrollToElement: string;
};

export const LinkScroller = ({
  height = 50,
  linkName,
  scrollToElement,
}: TLinkScrollProps) => {
  const mainRef = useContext(PortfolioContext);

  const handleMove = (e: MouseEvent | KeyboardEvent) => {
    if (e.type !== "click" && (e as KeyboardEvent).key !== "Enter") return;

    const target = mainRef?.current?.querySelector(`#${scrollToElement}`);
    if (!(target instanceof HTMLElement)) return;

    window.scroll({
      top: target.offsetTop - height,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      onClick={handleMove}
      onKeyDown={handleMove}
      role="button"
      tabIndex={0}
    >
      {linkName}
    </a>
  );
};
