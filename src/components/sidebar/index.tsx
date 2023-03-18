import { SidebarItem } from "../../types";
import UserImage from "../user-image";
import Item from "./sidebar-item";
import "./index.scss";

interface Props {
  items: SidebarItem[];
}

const Sidebar = ({ items }: Props) => (
  <div className="Sidebar" role="navigation" aria-label="Side Navigation">
    <div className="Sidebar__top">
      <UserImage image={null} name="Lewis Nkwo" size="medium" />
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
