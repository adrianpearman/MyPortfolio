export const Navigation = () => {
  return (
    <nav className="flex w-full">
      <div className="flex justify-between px-8 py-4 max-w-350 w-full">
        <div>
          <p className="font-heading">AP</p>
        </div>
        <ul className="flex gap-4">
          <li>Work</li>
          <li>Experience</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};
