import { useContext, type KeyboardEvent, type MouseEvent } from "react";
import { PortfolioContext } from "@/components/context";

type TLinkScrollProps = {
  className?: string;
  height?: number;
  id?: string;
  linkName: string;
  scrollToElement: string;
};

export const LinkScroll = ({
  className,
  height = 50,
  id,
  linkName,
  scrollToElement,
}: TLinkScrollProps) => {
  const mainRef = useContext(PortfolioContext);

  const handleMove = (e: MouseEvent | KeyboardEvent) => {
    if (e.type !== "click" && (e as KeyboardEvent).key !== "Enter") return;

    const target = Array.from(mainRef?.current?.children ?? []).find((el) =>
      el.classList.contains(scrollToElement),
    );
    if (!(target instanceof HTMLElement)) return;

    window.scroll({
      top: target.offsetTop - height,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <a
      className={className}
      id={id}
      onClick={handleMove}
      onKeyDown={handleMove}
      role="button"
      tabIndex={0}
    >
      {linkName}
    </a>
  );
};
