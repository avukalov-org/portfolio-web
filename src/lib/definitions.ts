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

export interface Skills {
  id: number;
  name: string;
  src: string;
}

export interface Asset {
  id: string;
  url: string;
}

export interface Tag {
  id: number;
  name: string;
  image: Asset;
}

export interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: Asset;
  updatedAt: string;
  sourceUrl: string;
  liveUrl: string;
  liveUser: string;
  livePassword: string;
  isPublic: boolean;
  priority: number;
  tags: Tag[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
