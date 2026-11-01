// NPM Modules
import { useRef, type ReactNode } from "react";
// Context Provider
import { PortfolioContext } from "./PortfolioContext";

type TMainContextProps = { children: ReactNode };

export const MainContext = ({ children }: TMainContextProps) => {
  const mainComponentRef = useRef<HTMLElement>(null);

  return (
    <PortfolioContext.Provider value={mainComponentRef}>
      <main ref={mainComponentRef}>{children}</main>
    </PortfolioContext.Provider>
  );
};
