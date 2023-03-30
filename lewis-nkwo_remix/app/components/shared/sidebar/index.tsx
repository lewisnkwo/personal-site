import { SidebarItem } from "../../../types";
import UserImage from "../image";
import Item from "./sidebar-item";
import author from "../../../images/lewisnkwo.jpg";
import { useEffect } from "react";

interface Props {
  items: SidebarItem[];
  isMenuOpen: boolean | undefined;
  onMenuClose: () => void;
}

const Sidebar = ({ items, isMenuOpen, onMenuClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
  }, [isMenuOpen]);

  return (
    <>
      <div
        className={`${
          isMenuOpen !== undefined
            ? `Sidebar${isMenuOpen ? "--open" : "--close"}`
            : `Sidebar`
        }`}
      >
        <div className="Sidebar__top">
          <UserImage image={author} name="Lewis Nkwo" size="medium" />
          <span className="Sidebar__name">Lewis Nkwo</span>
          <span className="Sidebar__role">Software Engineer</span>
        </div>
        <nav className="Sidebar__items" aria-label="Side Navigation">
          {items.map(({ icon, title }, i) => (
            <Item key={i} icon={icon} title={title} tabIndex={i} />
          ))}
        </nav>
      </div>
      {isMenuOpen && (
        <div className="Sidebar__underlay" onClick={onMenuClose} />
      )}
    </>
  );
};

export default Sidebar;
