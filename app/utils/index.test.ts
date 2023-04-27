import type { Post, PostModel } from "../types";
import { toPost } from ".";

describe("toPost", () => {
  it("should convert PostModels to Posts", () => {
    const posts: PostModel[] = [
      {
        id: 1,
        title: "Title 1",
        subtitle: "Subtitle 1",
        author: {
          name: {
            first: "John",
            last: "Doe",
          },
        },
        category: "Category 1",
        email: "johndoe@example.com",
        date: "2022-03-20",
        image: undefined,
      },
      {
        id: 2,
        title: "Title 2",
        subtitle: "Subtitle 2",
        author: {
          name: {
            first: "Jane",
            last: "Doe",
          },
        },
        category: "Category 2",
        email: "janedoe@example.com",
        date: "2022-03-21",
        image: undefined,
      },
    ];

    const expected: Post[] = [
      {
        id: 1,
        title: "Title 1",
        subtitle: "Subtitle 1",
        author: {
          name: "John Doe",
        },
        category: "Category 1",
        email: "johndoe@example.com",
        date: "2022-03-20",
        image: undefined,
      },
      {
        id: 2,
        title: "Title 2",
        subtitle: "Subtitle 2",
        author: {
          name: "Jane Doe",
        },
        category: "Category 2",
        email: "janedoe@example.com",
        date: "2022-03-21",
        image: undefined,
      },
    ];

    expect(toPost(posts)).toEqual(expected);
  });
});
