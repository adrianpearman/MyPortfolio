import { useContext, useEffect, useRef, useState } from "react";
import { PortfolioContext } from "@/components/context/PortfolioContext/PortfolioContext";
import { LinkScroller } from "@/components/reuseable";

export const Navigation = () => {
  const mainRef = useContext(PortfolioContext);
  const navRef = useRef<HTMLElement>(null);
  const [isOverLanding, setIsOverLanding] = useState(true);

  useEffect(() => {
    const landing = mainRef?.current?.querySelector("#main-landing");
    if (!landing || !navRef.current) return;

    // Shrink the observed area by the nav height so the background shows as soon as the landing's bottom edge reaches the nav's bottom edge.
    // shortcut: nav height is measured once on mount, re-measure on resize if the nav ever wraps.
    const observer = new IntersectionObserver(
      ([entry]) => setIsOverLanding(entry.isIntersecting),
      { rootMargin: `-${navRef.current.offsetHeight}px 0px 0px 0px` },
    );
    observer.observe(landing);
    return () => observer.disconnect();
  }, [mainRef]);

  return (
    <nav
      ref={navRef}
      className={`flex w-full fixed top-0 z-50 text-text-primary-on-dark ${isOverLanding ? "bg-transparent" : "bg-background-landing"}`}
    >
      <div className="flex justify-between px-8 py-4 max-w-350 w-full  max-xs:px-2">
        <div>
          <p className="font-heading">AP</p>
        </div>
        <ul className="flex gap-4 max-xs:text-secondary-paragraph">
          <li className="cursor-pointer">
            {/* Default offset (50) plus the pt-10 (40px) above this section in App */}
            <LinkScroller
              height={90}
              linkName="Work"
              scrollToElement="about-me"
            />
          </li>
          <li className="cursor-pointer">
            <LinkScroller linkName="Experience" scrollToElement="experience" />
          </li>
          <li className="cursor-pointer">
            <LinkScroller linkName="Contact" scrollToElement="footer" />
          </li>
        </ul>
      </div>
    </nav>
  );
};
