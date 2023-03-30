import PostItem from "./post-item";
import { useEffect, useState, useRef } from "react";
import { toPost } from "../../../utils";
import SidebarDetail from "../sidebar-detail";
import { Post } from "../../../types";
import fakePosts from "../../../fakeposts";

const Main = () => {
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
    <main className={`Main${selectedPost ? "-with-sidebar" : ""}`}>
      <div className="Main__left">
        <section>
          <span className="Main__heading">Latest posts</span>
          <span className="Main__description">Latest posts</span>
          <div className="Main__select-posts">
            Choice of posts:
            <select name="users" defaultValue="developers">
              <option value="developers">Developers</option>
            </select>
          </div>
        </section>
        <section className="Main__post-list">
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
      </div>
      {selectedPost && (
        <div ref={isMobile ? sidebarPostRef : null}>
          <SidebarDetail {...selectedPost} />
        </div>
      )}
    </main>
  );
};

export default Main;
