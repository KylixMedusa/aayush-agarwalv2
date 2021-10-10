import { urlIconMap } from "./data";

export interface IProjects {
  techStack: string[];
  title: string;
  description: string | JSX.Element;
  urls: { type: keyof typeof urlIconMap; link: string }[];
  image: string;
}
