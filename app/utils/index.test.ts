import type { Post, PostModel } from "../types";
import { toPost } from ".";

describe("toPost", () => {
  it("should convert a PostModel to Post", () => {
    const post: PostModel = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "An example body...",
      category: "Coding",
      createdAt: "2023-03-21",
      updatedAt: "2023-04-21",
    };

    const expected: Post = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "An example body...",
      category: "Coding",
      createdAt: "2023-03-21",
      updatedAt: "2023-04-21",
    };

    expect(toPost(post)).toEqual(expected);
  });
});
