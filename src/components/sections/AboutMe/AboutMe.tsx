import { BaseButton, BaseCell } from "@/components/reuseable";

export const AboutMe = () => {
  return (
    <section className="w-full flex gap-2">
      <BaseCell className="w-1/2">
        <div className="flex flex-col justify-around h-full w-full p-4">
          <p className="text-text-primary">Frontend Developer in Toronto</p>
          <h2 className="text-heading-1">Adrian Pearman</h2>
          <p className="text-text-primary">
            I build interfaces that load fast, read clearly and work for
            everyone
          </p>
        </div>
      </BaseCell>
      <BaseCell className="w-1/4">image</BaseCell>
      <BaseCell className="w-1/4">
        <div className="flex flex-col justify-between h-full w-full p-4">
          <div>
            <div className="flex gap-3 items-center">
              <div className="size-3 rounded-full bg-green-400"></div>
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
            <BaseButton className="w-full" variant="secondary">
              Book a Call
            </BaseButton>
          </div>
        </div>
      </BaseCell>
    </section>
  );
};
