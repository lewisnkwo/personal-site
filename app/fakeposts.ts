import { PostModel } from "./types";

const posts: PostModel[] = [
  {
    id: 1,
    title: "Why React?",
    subtitle: "Choosing how to build your website",
    author: {
      name: {
        first: "Lewis",
        last: "Nkwo",
      },
    },
    category: "General",
    email: "nkwolewis@gmail.com",
    date: "Today",
    image: undefined,
  },
  {
    id: 2,
    title: "Why Angular?",
    subtitle: "Choosing how to build your website",
    author: {
      name: {
        first: "Lewis",
        last: "Nkwo",
      },
    },
    category: "General",
    email: "nkwolewis@gmail.com",
    date: "Yesterday",
    image: undefined,
  },
];

export default posts;
