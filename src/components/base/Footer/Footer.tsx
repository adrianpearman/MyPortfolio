// import { Button } from "@/components/vendor";
import {
  FooterNavigation,
  FooterTextReveal,
} from "@/components/base/Footer/components";

export const Footer = () => {
  return (
    <footer className="contactForm w-full py-12 flex flex-col bg-linear-to-b from-background-quaternary to-black text-cream justify-center">
      <div className="w-full min-h-[350px]  max-w-325 flex flex-col justify-around">
        <FooterTextReveal />
      </div>
      <div className="w-full min-h-16  max-w-325 flex flex-col justify-around">
        <FooterNavigation />
      </div>
    </footer>
  );
};
