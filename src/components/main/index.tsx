import UserItem from "./user-item";
import "./index.scss";
import { useEffect, useState, useRef } from "react";
import { toUserList } from "../../utils";
import SidebarUser from "../sidebar-user";
import { UserListItem } from "../../types";

const Main = () => {
  const [users, setUsers] = useState<UserListItem[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const [selectedUser, setSelectedUser] = useState<UserListItem | undefined>(
    undefined
  );

  const sidebarUserRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setError(false);
    setLoading(true);

    fetch(
      "https://randomuser.me/api/?results=10&inc=name,email,cell,location,picture"
    )
      .then((response) => response.json())
      .then(({ results }) => setUsers(toUserList(results)))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (sidebarUserRef?.current) {
      sidebarUserRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [selectedUser]);

  return (
    <main className={`Main${selectedUser ? "-with-sidebar" : ""}`}>
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
          {loading && <span className="loading">Loading users...</span>}
          {error && (
            <span className="error">
              Oops! An error occurred while loading the users. Please refresh
              and try again.
            </span>
          )}
          {users?.map((u, i) => (
            <UserItem
              key={i}
              {...u}
              onSelect={() =>
                setSelectedUser(selectedUser === u ? undefined : u)
              }
              isSelected={selectedUser?.name === u.name}
              tabIndex={i}
            />
          ))}
        </section>
      </div>
      {selectedUser && (
        <div ref={window.innerWidth <= 480 ? sidebarUserRef : null}>
          <SidebarUser {...selectedUser} />
        </div>
      )}
    </main>
  );
};

export default Main;
