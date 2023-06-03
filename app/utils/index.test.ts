import type { Post, PostModel } from "../types";
import { toDate, toPost } from ".";

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

describe("toDate", () => {
  it("should format the date as expected", () => {
    const date = toDate("2023-06-02T14:52:06.562Z");
    expect(date).toEqual("Friday, 2 June 2023");
  });

  it("should return `Invalid Date` for incorrect inputs", () => {
    const date = toDate("incorrect-date-here");
    expect(date).toEqual("Invalid Date");
  });
});
