import { Post, PostModel } from "./types";

export const postListTabIndex = 8;

export const toPost = (posts: PostModel[]): Post[] =>
  posts.map((post) => ({
    ...post,
    author: {
      name: `${post.author.name.first} ${post.author.name.last}`,
    },
  }));

export const isMobile = window.innerWidth <= 768;
