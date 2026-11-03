import { BaseButton } from "@/components/reuseable";
import { CONTACT_DATA } from "@/data";

export const FooterExternalLinks = () => {
  return (
    <div className="flex flex-col justify-between h-full p-4">
      <h2 className="text-heading-4 tracking-normal">Where you can reach me</h2>
      <div className="flex flex-col gap-2 w-full">
        {CONTACT_DATA.map((c, i) => {
          return (
            <div
              className="flex justify-between w-full border-b border-b-background-tertiary p-1 items-center"
              key={`contact-data-item-${i}`}
            >
              <h3>{c.source}</h3>
              <BaseButton
                ariaLabel={c.alt}
                className="text-secondary-paragraph border-transparent py-1 px-2"
                href={c.href}
                variant="tertiary"
              >
                Open
              </BaseButton>
            </div>
          );
        })}
        <div className="flex justify-between w-full border-b border-b-transparent p-1 items-center">
          <h3>Email</h3>
          <BaseButton
            ariaLabel={`Opens your email to message Adrian regarding any opportunities`}
            className="text-secondary-paragraph border-transparent py-1 px-2"
            href={"mailto:adrianpearman12@gmail.com"}
            variant="tertiary"
          >
            <p>adrianpearman12@gmail.com</p>
          </BaseButton>
        </div>
      </div>
    </div>
  );
};
