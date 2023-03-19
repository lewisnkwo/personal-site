import UserItem from "./user-item";
import "./index.scss";
import { useEffect, useState, useRef } from "react";
import { toPost } from "../../utils";
import SidebarDetail from "../sidebar-detail";
import { Post } from "../../types";
import fakePosts from "../../fakeposts";

const Main = () => {
  const posts = toPost(fakePosts);

  const [selectedPost, setSelectedPost] = useState<Post | undefined>(undefined);

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

  return (
    <main className={`Main${selectedPost ? "-with-sidebar" : ""}`}>
      <div className="Main__left">
        <section>
          <span className="Main__heading">Users</span>
          <span className="Main__description">
            If you want to get contact information to specific users, select a
            group and then select them from the list below
          </span>
          <div className="Main__select-users">
            Select a group of users
            <select name="users" defaultValue="developers">
              <option value="developers">Developers</option>
            </select>
          </div>
        </section>
        <section className="Main__user-list">
          {posts.map((p, i) => (
            <UserItem
              key={i}
              {...p}
              onSelect={() =>
                setSelectedPost(selectedPost === p ? undefined : p)
              }
              isSelected={selectedPost?.title === p.title}
              tabIndex={i}
            />
          ))}
        </section>
      </div>
      {selectedPost && (
        <div ref={window.innerWidth <= 480 ? sidebarPostRef : null}>
          <SidebarDetail {...selectedPost} />
        </div>
      )}
    </main>
  );
};

export default Main;
