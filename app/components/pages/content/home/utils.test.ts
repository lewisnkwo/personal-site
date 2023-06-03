import type { Post } from "~/types";
import { filterPosts } from "./utils";

describe("filterPosts", () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "Post 1",
      subtitle: "Subtitle 1",
      body: "Body 1",
      category: "Coding",
      createdAt: "2023-01-01",
      updatedAt: "2023-01-02",
    },
    {
      id: "2",
      title: "Post 2",
      subtitle: "Subtitle 2",
      body: "Body 2",
      category: "Travel",
      createdAt: "2023-02-01",
      updatedAt: "2023-02-02",
    },
  ];

  it('should filter posts correctly for the "Coding" category', () => {
    const filteredPosts = filterPosts(posts, "Coding");
    expect(filteredPosts).toHaveLength(1);
    expect(filteredPosts[0].category).toBe("Coding");
  });

  it('should filter posts correctly for the "Travel" category', () => {
    const filteredPosts = filterPosts(posts, "Travel");
    expect(filteredPosts).toHaveLength(1);
    expect(filteredPosts[0].category).toBe("Travel");
  });
});
