export type TContactData = {
  alt: string;
  href: string;
  source: string;
};

export type TProjectsData = {
  stack: string[];
  title: string;
  projectImage: string;
  overview: string;
  liveLink: string;
  repoLink: string;
};

export type TTimelineEntry = {
  dates: string;
  employer: string;
  iconColor: React.HTMLProps<HTMLElement>["className"];
  location: string;
  responsibilities: string[];
  title: string;
};
