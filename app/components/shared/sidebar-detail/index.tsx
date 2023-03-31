import Image from "../image";
import SidebarDetailItem from "./post-item";
import type { Post as Props } from "../../../types";

const SidebarDetail = ({ title, subtitle, image, author }: Props) => (
  <div className="SidebarDetail" aria-label={title}>
    <section className="SidebarDetail__top">
      {image && <Image image={image} name={title} size="large" />}
      <div className="SidebarDetail__info">
        <span className="SidebarDetail__title">{title}</span>
        <span className="SidebarDetail__subtitle">{subtitle}</span>
      </div>
    </section>
    <section className="SidebarDetail__items">
      <SidebarDetailItem label="Author" value={author.name} />
    </section>
  </div>
);

export default SidebarDetail;
