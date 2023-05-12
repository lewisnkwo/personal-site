import SidebarDetailItem from "./post-item";
import type { Post as Props } from "../../../types";
import { Link } from "@remix-run/react";

const SidebarDetail = ({ id, title, subtitle, updatedAt }: Props) => (
  <div className="SidebarDetail" aria-label={title}>
    <section className="SidebarDetail__top">
      <div className="SidebarDetail__info">
        <span className="SidebarDetail__title">{title}</span>
        <span className="SidebarDetail__subtitle">{subtitle}</span>
        <Link prefetch="intent" to={`/posts/${id}`}>
          View post
        </Link>
      </div>
    </section>
    <section className="SidebarDetail__items">
      <SidebarDetailItem label="Last updated" value={updatedAt} />
    </section>
  </div>
);

export default SidebarDetail;
