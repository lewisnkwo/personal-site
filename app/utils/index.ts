import type { Post, PostCategory, PostModel } from "../types";

export const postListTabIndex = 8;

export const toPost = (post: PostModel): Post => ({
  ...post,
  category: post.category as PostCategory,
});
