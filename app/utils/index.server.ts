import type { PostModel } from "@prisma/client";
import type { Post, PostCategory } from "../types";

export const toDate = (value: Date): string => {
  const date = new Date(value);
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

export const toPost = (post: PostModel): Post => ({
  ...post,
  body: post.body ?? undefined,
  slug: post.slug ?? undefined,
  createdAt: toDate(post.createdAt),
  updatedAt: toDate(post.updatedAt),
  category: post.category as PostCategory,
  userId: post.userId ?? undefined,
});
