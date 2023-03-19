import { SidebarItem } from "../../types";
import UserImage from "../post-image";
import Item from "./sidebar-item";
import "./index.scss";
import author from "../../images/lewisnkwo.jpg";

interface Props {
  items: SidebarItem[];
}

const Sidebar = ({ items }: Props) => (
  <div className="Sidebar" role="navigation" aria-label="Side Navigation">
    <div className="Sidebar__top">
      <UserImage image={author} name="Lewis Nkwo" size="medium" />
      <span className="Sidebar__name">Lewis Nkwo</span>
      <span className="Sidebar__role">Frontend Engineer</span>
    </div>
    <nav className="Sidebar__items">
      {items.map(({ icon, title }, i) => (
        <Item key={i} icon={icon} title={title} tabIndex={i} />
      ))}
    </nav>
  </div>
);

export default Sidebar;
