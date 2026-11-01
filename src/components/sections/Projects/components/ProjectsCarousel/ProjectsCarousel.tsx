import { ProjectCarouselButton } from "@/components/sections/Projects/components/ProjectCarouselButton";
import { ProjectCarouselPill } from "@/components/sections/Projects/components/ProjectCarouselPill";

export const ProjectsCarousel = () => {
  return (
    <div className="flex p-4 gap-2 text-text-primary-on-dark h-full">
      <div className="w-1/3 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h3>Featured Project:</h3>
          <h2 className="text-heading-3 tracking-normal">Projects</h2>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <ProjectCarouselPill content="asd" />
            <ProjectCarouselPill content="asd" />
            <ProjectCarouselPill content="asd" />
          </div>

          <div className="flex gap-2 items-center">
            <div className="flex gap-2">
              <ProjectCarouselButton
                direction="previous"
                onClick={() => console.log("adsasdasd")}
              />
              <ProjectCarouselButton
                direction="next"
                onClick={() => console.log("adsasdasd")}
              />
            </div>
            <p className="text-secondary-paragraph text-text-secondary-on-dark">
              1 of 12
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 w-2/3">
        <div className="flex-1 h-fit w-full rounded-2xl bg-red-500"></div>
        <div className="h-12 flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              className="h-full w-1/6 bg-green-400 rounded-2xl"
              key={`project-carousel-item-${i}`}
            ></div>
          ))}
          <div className="h-full w-1/6 bg-yellow-400 rounded-2xl"></div>
        </div>
      </div>
    </div>
  );
};
