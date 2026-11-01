import { createContext, type RefObject } from "react";

export const PortfolioContext = createContext<RefObject<HTMLElement | null> | null>(null);
