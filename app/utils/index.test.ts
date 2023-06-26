import type { PostModel } from "@prisma/client";
import type { Post } from "../types";
import { toDate, toPost, toPostPartial } from "./index.server";

describe("toPost", () => {
  it("should convert a PostModel with defined values to Post", () => {
    const post: PostModel = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "An example body...",
      slug: "title-1",
      category: "Engineering",
      readTime: "5 Minutes",
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
      readTime: "5 Minutes",
      createdAt: "Sunday, 4 June 2023",
      updatedAt: "Monday, 5 June 2023",
      userId: "lewis",
    };

    expect(toPost(post)).toEqual(expected);
  });

  it("should convert a PostModel with undefined values to Post", () => {
    const post: PostModel = {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      body: null,
      slug: "title-2",
      category: "Engineering",
      readTime: null,
      createdAt: new Date("2023-07-04T20:13:35.835Z"),
      updatedAt: new Date("2023-07-05T20:13:35.835Z"),
      userId: "lewis",
    };

    const expected: Post = {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      body: undefined,
      slug: "title-2",
      category: "Engineering",
      readTime: undefined,
      createdAt: "Tuesday, 4 July 2023",
      updatedAt: "Wednesday, 5 July 2023",
      userId: "lewis",
    };

    expect(toPost(post)).toEqual(expected);
  });
});

describe("toPostPartial", () => {
  it("should convert a partial PostModel with defined values to a partial Post", () => {
    const post: Partial<PostModel> = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "A body to die for...",
    };

    const expected: Partial<Post> = {
      id: "1",
      title: "Title 1",
      subtitle: "Subtitle 1",
      body: "A body to die for...",
    };

    expect(toPostPartial(post)).toEqual(expected);
  });

  it("should convert a partial PostModel with undefined values to a partial Post", () => {
    const post: Partial<PostModel> = {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      body: null,
    };

    const expected: Partial<Post> = {
      id: "2",
      title: "Title 2",
      subtitle: "Subtitle 2",
      body: undefined,
    };

    expect(toPostPartial(post)).toEqual(expected);
  });
});

describe("toDate", () => {
  it("should format the date as expected", () => {
    const date = new Date("2023-06-02T14:52:06.562Z");
    expect(toDate(date)).toEqual("Friday, 2 June 2023");
  });
});
