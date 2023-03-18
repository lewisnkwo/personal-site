import { SidebarItem as SidebarItemT } from "../../../types";
import "./index.scss";

interface Props extends SidebarItemT {
  tabIndex: number;
}

const SidebarItem = ({ icon, title, tabIndex }: Props) => (
  <div
    className="SidebarItem"
    role="menuitem"
    aria-label={title}
    tabIndex={tabIndex + 1}
  >
    <img className="SidebarItem__icon" src={icon} alt={title} />
    <span className="SidebarItem__title">{title}</span>
  </div>
);

export default SidebarItem;
