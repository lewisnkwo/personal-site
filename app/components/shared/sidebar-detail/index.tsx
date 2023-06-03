import SidebarDetailItem from "./post-item";
import type { Post as Props } from "../../../types";
import { useNavigate } from "@remix-run/react";
import { toDate } from "~/utils";

const SidebarDetail = ({
  id,
  title,
  subtitle,
  category,
  createdAt,
  updatedAt,
}: Props) => {
  const goTo = useNavigate();

  return (
    <div className="SidebarDetail" aria-label={title}>
      <section className="SidebarDetail__top">
        <div className="SidebarDetail__info">
          <span className="SidebarDetail__title">{title}</span>
          <span className="SidebarDetail__subtitle">{subtitle}</span>
          <div className="SidebarDetail__actions">
            <button onClick={() => goTo(`/posts/${id}`)}>View post</button>
          </div>
        </div>
      </section>
      <section className="SidebarDetail__items">
        <SidebarDetailItem label="Category" value={category} />
        <SidebarDetailItem label="Date created" value={toDate(createdAt)} />
        <SidebarDetailItem label="Last updated" value={toDate(updatedAt)} />
      </section>
    </div>
  );
};

export default SidebarDetail;
