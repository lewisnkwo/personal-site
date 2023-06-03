import type { Post, PostCategory, PostModel } from "../types";
export const postListTabIndex = 8;

export const toPost = (post: PostModel): Post => ({
  ...post,
  category: post.category as PostCategory,
});

export const toDate = (value: string): string => {
  const date = new Date(value);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
