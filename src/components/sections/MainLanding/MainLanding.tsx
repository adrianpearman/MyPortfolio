import { BaseButton } from "@/components/reuseable";

import LandingImage from "@/assets/images/HeaderBackground2.jpg";

export const MainLanding = () => {
  const style = {
    backgroundImage: `linear-gradient(color-mix(in srgb, var(--color-background-landing) 60%, transparent), color-mix(in srgb, var(--color-background-landing) 60%, transparent)), url(${LandingImage})`,
  };

  return (
    <header
      id="main-landing"
      className="flex min-h-screen bg-cover bg-center text-text-primary-on-dark items-end justify-center"
      style={style}
    >
      <div className="flex flex-col min-h-88 w-full max-w-350 justify-around py-5 px-10 mb-5">
        <p>
          <strong>Adrian Pearman</strong> - Frontend Developer
        </p>
        <h1 className="text-hero-heading test">Welcome</h1>
        <div className="flex flex-row gap-3">
          <BaseButton variant="secondary">Let's collaborate</BaseButton>
          <BaseButton variant="tertiary">See my work</BaseButton>
        </div>
      </div>
    </header>
  );
};
