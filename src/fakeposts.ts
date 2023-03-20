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
    date: "Yesterday",
    image: undefined,
  },
  {
    id: 3,
    title: "Why React?",
    subtitle: "Choosing how to build your website",
    author: {
      name: {
        first: "Lewis",
        last: "Nkwo",
      },
    },
    category: "A11y",
    email: "nkwolewis@gmail.com",
    date: "Yesterday",
    image: undefined,
  },
  {
    id: 4,
    title: "Why React?",
    subtitle: "Choosing how to build your website",
    author: {
      name: {
        first: "Lewis",
        last: "Nkwo",
      },
    },
    category: "Peformance",
    email: "nkwolewis@gmail.com",
    date: "Yesterday",
    image: undefined,
  },
];

export default posts;
