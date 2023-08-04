// NPM Modules
import { useRef } from "react";
// Context Provider
import { ThemeContext } from "./ContextProvider";

const MainContext = (props) => {
  const mainComponentRef = useRef(null);

  return (
    <ThemeContext.Provider value={mainComponentRef}>
      <main ref={mainComponentRef}>{props.children}</main>
    </ThemeContext.Provider>
  );
};

export default MainContext;
