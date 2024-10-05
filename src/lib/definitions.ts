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
  id: number;
  documentId: string;
  title: string;
  description: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: any;
  sourceUrl: string;
  liveUrl: string;
  isPublic: boolean;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
