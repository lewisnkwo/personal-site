import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  await Promise.all(
    getPosts().map((post) => {
      return db.post.create({ data: post });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Why React",
      subTitle: `The benefits of using React`,
      body: "My summary of using one of the most popular JS libraries in the world.",
      category: "Coding",
    },
    {
      title: "Why TypeScript",
      subTitle: `The benefits of using Typescript over plain JS`,
      body: "Why Typescript will make your life easier during development",
      category: "Coding",
    },
  ];
}
