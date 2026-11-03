import { BasePill } from "@/components/reuseable";
import { STACK_LIST } from "@/data";

export const TechStack = () => {
  return (
    <div className="flex flex-col gap-4 w-full p-4">
      <h2 className="text-heading-5 tracking-normal">Stack</h2>
      <ul className="flex flex-wrap gap-2">
        {STACK_LIST.map((stack, index) => (
          <li key={`stack-list-item${index}`}>
            <BasePill className="">
              <p>{stack}</p>
            </BasePill>
          </li>
        ))}
      </ul>
    </div>
  );
};
