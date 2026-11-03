import { BaseCell, FadeInView } from "@/components/reuseable";
import {
  FooterContentReveal,
  FooterExternalLinks,
} from "@/components/sections/Footer/components";

export const Footer = () => {
  const year = new Date();
  return (
    <footer
      className="w-full max-w-350 px-10 pb-6 mx-auto  max-sm:px-5"
      id="footer"
    >
      <FadeInView className="flex flex-col gap-2">
        <div className="flex gap-2 min-h-72 max-sm:flex-col">
          <BaseCell className="w-2/3 min-h-48 max-sm:w-full">
            <FooterContentReveal />
          </BaseCell>
          <BaseCell className="w-1/3 min-h-48 bg-linear-135 from-purple-cell-background to-purple-cell-background-2 text-text-primary-on-dark max-sm:w-full max-sm:min-h-52">
            <FooterExternalLinks />
          </BaseCell>
        </div>
        <div className="flex justify-center p-4">
          <p>&copy; Adrian Pearman {year.getUTCFullYear()}</p>
        </div>
      </FadeInView>
    </footer>
  );
};
