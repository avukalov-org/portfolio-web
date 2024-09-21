export interface NavLink {
  url: string;
  title: string;
}

export interface ProjectItem {
  id: number;
  color: string;
  title: string;
  desc: string;
  img: string;
  link: string;
}

export interface ExperienceItem {
  title: string;
  desc: string;
  date: string;
  company: {
    url: string;
    name: string;
  };
}

export interface Project {
  title: string;
  description: string;
  image: string;
}
