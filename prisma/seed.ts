import { PrismaClient } from "@prisma/client";
const db = new PrismaClient();

async function seed() {
  const author = await db.user.create({
    data: {
      username: "author",
      passwordHash:
        "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
    },
  });

  await Promise.all(
    getPosts().map((post) => {
      const data = { userId: author.id, ...post };
      return db.postModel.create({ data });
    })
  );
}

seed();

function getPosts() {
  return [
    {
      title: "Why React",
      subTitle: "The benefits of using React",
      body: "My summary of using one of the most popular JS libraries in the world.",
      category: "Coding",
    },
    {
      title: "Why TypeScript",
      subTitle: "The benefits of using Typescript over plain JS",
      body: "Why Typescript will make your life easier during development",
      category: "Coding",
    },
  ];
}
