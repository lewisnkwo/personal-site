import PostItem from "./post-item";
import { useEffect, useState, useRef } from "react";
import { toPost } from "../../../utils";
import SidebarDetail from "../../shared/sidebar-detail";
import type { Post } from "../../../types";
import fakePosts from "../../../fakeposts";

const Home = () => {
  const posts = toPost(fakePosts);

  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

  const sidebarPostRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.innerWidth <= 768 ? setIsMobile(true) : setIsMobile(false);
  }, []);

  useEffect(() => {
    if (sidebarPostRef?.current) {
      sidebarPostRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [selectedPost]);

  return (
    <main className={`Home${selectedPost ? "-with-sidebar" : ""}`}>
      <section>
        <span className="Home__heading">Latest posts</span>
        <span className="Home__description">Latest posts</span>
        <div className="Home__select-posts">
          Choice of posts:
          <select name="users" defaultValue="developers">
            <option value="developers">Developers</option>
          </select>
        </div>
      </section>
      <section className="Home__post-list">
        {posts.map((p, i) => (
          <PostItem
            key={i}
            {...p}
            onSelect={() =>
              setSelectedPost(selectedPost?.id === p.id ? undefined : p)
            }
            isSelected={selectedPost?.id === p.id}
            tabIndex={i}
          />
        ))}
      </section>
      {selectedPost && (
        <div ref={isMobile ? sidebarPostRef : null}>
          <SidebarDetail {...selectedPost} />
        </div>
      )}
    </main>
  );
};

export default Home;