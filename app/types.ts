export interface SidebarItem {
  icon: string;
  title: string;
  slug?: string;
  external?: string;
}

export type Size = "small" | "medium" | "large";

export type PostCategory = "Engineering" | "Travel";

export interface Post {
  id: string;
  title: string;
  subtitle: string;
  body: string | undefined;
  slug: string | undefined;
  category: PostCategory;
  createdAt: string;
  updatedAt: string;
  userId: string | undefined;
}

export interface PostListItem {
  title: string;
  subtitle: string;
  updatedAt: string;
}
