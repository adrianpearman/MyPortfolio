export type TTimelineEntry = {
  dates: string;
  employer: string;
  iconColor: React.HTMLProps<HTMLElement>["className"];
  location: string;
  responsibilities: string[];
  title: string;
};

export type TContactData = {
  alt: string;
  href: string;
  source: string;
};
