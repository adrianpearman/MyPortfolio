import { BaseButton } from "@/components/reuseable";

export const AboutMeCallToActions = () => {
  return (
    <div className="flex flex-col justify-between h-full w-full p-4">
      <div>
        <div className="flex gap-3 items-center">
          <div className="size-3 rounded-full bg-green-status-icon"></div>
          <p>
            <strong>Open to senior roles</strong>
          </p>
        </div>
        <p>Toronto, Canada</p>
        <p>Remote or hybrid</p>
      </div>
      <div className="flex flex-col gap-2">
        <BaseButton className="w-full" variant="primary">
          Download Resume
        </BaseButton>
        <BaseButton
          className="w-full"
          href="https://www.calendly.com/adrianpearman/30min"
          variant="secondary"
        >
          Book a Call
        </BaseButton>
      </div>
    </div>
  );
};
