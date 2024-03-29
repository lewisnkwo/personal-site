import SidebarDetailItem from "./post-item";
import type { Post as Props } from "../../../types";
import { useNavigate } from "@remix-run/react";

const SidebarDetail = ({
  id,
  slug,
  title,
  subtitle,
  category,
  readTime,
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
            <button onClick={() => goTo(`/posts/${slug ?? id}`)}>
              Let's go
            </button>
          </div>
        </div>
      </section>
      <section className="SidebarDetail__items">
        <SidebarDetailItem label="Category" value={category} />
        <SidebarDetailItem label="Last updated" value={updatedAt} />
        <SidebarDetailItem label="Date created" value={createdAt} />
        {readTime && (
          <SidebarDetailItem label="Estimated reading time" value={readTime} />
        )}
      </section>
    </div>
  );
};

export default SidebarDetail;
