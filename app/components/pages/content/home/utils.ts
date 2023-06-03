import type { Post, PostCategory } from "~/types";

export const filterPosts = (posts: Post[], category: PostCategory): Post[] =>
  posts.filter((p) => p.category === category);
