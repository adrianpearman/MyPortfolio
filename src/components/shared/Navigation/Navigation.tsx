import { LinkScroller } from "@/components/reuseable";

export const Navigation = () => {
  return (
    <nav className="flex w-full fixed top-0 text-text-primary-on-dark">
      <div className="flex justify-between px-8 py-4 max-w-350 w-full">
        <div>
          <p className="font-heading">AP</p>
        </div>
        <ul className="flex gap-4">
          <li className="cursor-pointer">
            <LinkScroller linkName="Work" scrollToElement="about-me" />
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
