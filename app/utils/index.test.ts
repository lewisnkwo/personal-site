import type { PostModel } from "@prisma/client";
import type { Post } from "../types";
import { toDate, toPost } from "./index.server";

describe("toPost", () => {
  it("should convert a PostModel to Post", () => {
    const post: PostModel = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "An example body...",
      slug: "title-1",
      category: "Engineering",
      createdAt: new Date("2023-06-04T20:13:35.835Z"),
      updatedAt: new Date("2023-06-05T20:13:35.835Z"),
      userId: "lewis",
    };

    const expected: Post = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "An example body...",
      slug: "title-1",
      category: "Engineering",
      createdAt: "Sunday, 4 June 2023",
      updatedAt: "Monday, 5 June 2023",
      userId: "lewis",
    };

    expect(toPost(post)).toEqual(expected);
  });
});

describe("toDate", () => {
  it("should format the date as expected", () => {
    const date = new Date("2023-06-02T14:52:06.562Z");
    expect(toDate(date)).toEqual("Friday, 2 June 2023");
  });
});
