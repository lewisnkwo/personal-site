import { useEffect, useState, useRef } from "react";
import SidebarDetail from "../../../shared/sidebar-detail";
import type { Post, PostCategory } from "~/types";
import PostList from "~/components/shared/post-list-home";
import { filterPosts } from "./utils";
import { useDeviceWidth } from "~/hooks/useDeviceWidth";

interface Props {
  posts: Post[];
}

const Home = ({ posts }: Props) => {
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);
  const [latestPosts, setLatestPosts] = useState<Post[]>(posts);

  const sidebarPostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sidebarPostRef?.current) {
      sidebarPostRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [selectedPost]);

  const isMobile = useDeviceWidth();

  return (
    <div className={`Home${selectedPost ? "-with-sidebar" : ""}`}>
      <main>
        <div>
          <section>
            <h2>What's new on my mind?</h2>
            <span className="Home__description">
              Latest posts from Lewis Nkwo
            </span>
            <div className="Home__select-posts">
              Choice of posts:
              <select
                name="postType"
                defaultValue="All"
                onChange={(e) => {
                  if (e.currentTarget.value !== 'All') {
                    setLatestPosts(
                      filterPosts(posts, e.currentTarget.value as PostCategory)
                    );
                  } else {
                    setLatestPosts(posts)
                  }
                }}
              >
                <option value="All">Select a category</option>
                <option value="Engineering">Engineering</option>
                <option value="Travel">Travel</option>
              </select>
            </div>
          </section>
          <section className="Home__post-list">
            {posts.length === 0 && "No posts found."}
            <PostList
              posts={latestPosts}
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
            />
          </section>
        </div>
      </main>
      {selectedPost && (
        <div ref={isMobile ? sidebarPostRef : null}>
          <SidebarDetail {...selectedPost} />
        </div>
      )}
    </div>
  );
};

export default Home;
