import type { Post, PostModel } from "../types";
import { toPosts } from ".";

describe("toPosts", () => {
  it("should convert PostModels to Posts", () => {
    const posts: PostModel[] = [
      {
        id: "1",
        title: "Title 1",
        subTitle: "Subtitle 1",
        body: "An example body...",
        category: "Coding",
        createdAt: "2023-03-21",
        updatedAt: "2023-04-21",
      },
      {
        id: "2",
        title: "Title 2",
        subTitle: "Subtitle 2",
        body: "An another example body...",
        category: "Travel",
        createdAt: "2023-03-22",
        updatedAt: "2023-04-22",
      },
    ];

    const expected: Post[] = [
      {
        id: 1,
        title: "Title 1",
        subTitle: "Subtitle 1",
        body: "An example body...",
        category: "Coding",
        createdAt: "2023-03-21",
        updatedAt: "2023-04-21",
      },
      {
        id: 2,
        title: "Title 2",
        subTitle: "Subtitle 2",
        body: "An another example body...",
        category: "Travel",
        createdAt: "2023-03-22",
        updatedAt: "2023-04-22",
      },
    ];

    expect(toPosts(posts)).toEqual(expected);
  });
});
