export interface SidebarItem {
  icon: string;
  title: string;
  slug?: string;
  external?: string;
}

export type Size = "small" | "medium" | "large";

export type PostCategory = "Coding" | "Travel";

export interface PostModel {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  category: string;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  body: string;
  category: PostCategory;
  createdAt: string;
  updatedAt: string;
}

export interface PostListItem {
  title: string;
  subtitle: string;
  updatedAt: string;
}
