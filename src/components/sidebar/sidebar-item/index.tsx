import { SidebarItem as SidebarItemT } from "../../../types";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName } from "@fortawesome/fontawesome-common-types";

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
    <div className="SidebarItem__icon-container">
      <FontAwesomeIcon icon={icon as IconName} />
    </div>
    <span className="SidebarItem__title">{title}</span>
  </div>
);

export default SidebarItem;
