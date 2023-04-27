import type { Post, PostCategory, PostModel } from "../types";

export const postListTabIndex = 8;

export const toPost = (posts: PostModel[]): Post[] =>
  posts.map((post) => ({
    ...post,
    id: parseInt(post.id),
    category: post.category as PostCategory,
  }));
