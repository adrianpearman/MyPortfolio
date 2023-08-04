// NPM Modules
import { useContext } from "react";
// Context
import { ThemeContext } from "../context/ContextProvider";

const HelperLinkScroll = ({
  className,
  height,
  id,
  linkName,
  scrollToElement,
}) => {
  const main = useContext(ThemeContext);

  const handleMoveOnKeyPress = (e) => {
    const scrollOffsetHeight = height !== undefined ? height : 50;

    for (const iterator of main.current.children) {
      if (iterator.className === scrollToElement) {
        if (e.type === "click" || e.key === "Enter") {
          window.scroll({
            top: iterator.offsetTop - scrollOffsetHeight,
            left: 0,
            behavior: "smooth",
          });
        }
      }
    }
  };

  return (
    <a
      className={className}
      id={id}
      onClick={(e) => {
        handleMoveOnKeyPress(e);
      }}
      onKeyDown={(e) => {
        handleMoveOnKeyPress(e);
      }}
      tabIndex={0}
    >
      {linkName}
    </a>
  );
};

export default HelperLinkScroll;
