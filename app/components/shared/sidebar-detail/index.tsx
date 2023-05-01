import SidebarDetailItem from "./post-item";
import type { Post as Props } from "../../../types";

const SidebarDetail = ({ title, subTitle, updatedAt }: Props) => (
  <div className="SidebarDetail" aria-label={title}>
    <section className="SidebarDetail__top">
      <div className="SidebarDetail__info">
        <span className="SidebarDetail__title">{title}</span>
        <span className="SidebarDetail__subtitle">{subTitle}</span>
        <span>View post</span>
      </div>
    </section>
    <section className="SidebarDetail__items">
      <SidebarDetailItem label="Last updated" value={updatedAt} />
    </section>
  </div>
);

export default SidebarDetail;
