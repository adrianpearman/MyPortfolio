import { BaseCell } from "@/components/reuseable";
import {
  FooterContentReveal,
  FooterExternalLinks,
} from "@/components/sections/Footer/components";

export const Footer = () => {
  const year = new Date();
  return (
    <footer className="flex flex-col gap-2 w-full max-w-350 px-10 pb-6">
      <div className="flex gap-2 min-h-72">
        <BaseCell className="w-2/3 min-h-48">
          <FooterContentReveal />
        </BaseCell>
        <BaseCell className="w-1/3 min-h-48 bg-purple-cell-background text-text-primary-on-dark">
          <FooterExternalLinks />
        </BaseCell>
      </div>
      <div className="flex justify-center p-4">
        <p>&copy; Adrian Pearman {year.getUTCFullYear()}</p>
      </div>
    </footer>
  );
};
