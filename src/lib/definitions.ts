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

export interface Tag {
  id: number;
  documentId: string;
  name: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  sourceUrl: string;
  liveUrl: string;
  liveUser: string;
  livePassword: string;
  isPublic: boolean;
  tags: Tag[];
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
