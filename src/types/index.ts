export interface Project {
  id: string;
  title: string;
  tag: string;
  year: string;
  desc: string;
  stack: string[];
  status: "LIVE" | "WIP" | "ARCHIVE";
}
