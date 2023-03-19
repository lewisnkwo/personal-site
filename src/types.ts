export interface SidebarItem {
  icon: string;
  title: string;
}

export type Size = "small" | "medium" | "large";

export interface PostModel {
  title: string;
  subtitle: string;
  author: {
    name: {
      first: string;
      last: string;
    };
  };
  category: string;
  email: string;
  date: string;
  image: string | undefined;
}

export interface Post {
  title: string;
  subtitle: string;
  author: {
    name: string;
  };
  category: string;
  email: string;
  date: string;
  image: string | undefined;
}

export interface PostListItem {
  name: string;
  city: string;
  phone: string;
  email: string;
  picture: string;
}
