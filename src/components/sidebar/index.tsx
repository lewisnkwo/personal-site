import { SidebarItem } from "../../types";
import UserImage from "../post-image";
import Item from "./sidebar-item";
import "./index.scss";
import author from "../../images/lewisnkwo.jpg";
interface Props {
  items: SidebarItem[];
  isMenuOpen: boolean;
  onMenuClose: () => void;
}

const Sidebar = ({ items, isMenuOpen, onMenuClose }: Props) => (
  <>
    <div className={`Sidebar${isMenuOpen ? "--open" : "--close"}`}>
      <div className="Sidebar__top">
        <UserImage image={author} name="Lewis Nkwo" size="medium" />
        <span className="Sidebar__name">Lewis Nkwo</span>
        <span className="Sidebar__role">Frontend Engineer</span>
      </div>
      <nav className="Sidebar__items" aria-label="Side Navigation">
        {items.map(({ icon, title }, i) => (
          <Item key={i} icon={icon} title={title} tabIndex={i} />
        ))}
      </nav>
    </div>
    {isMenuOpen && <div className="Sidebar__underlay" onClick={onMenuClose} />}
  </>
);

export default Sidebar;
