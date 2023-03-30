import { SidebarItem as SidebarItemT } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";

interface Props extends SidebarItemT {
  tabIndex: number;
}

const SidebarItem = ({ icon, title, tabIndex }: Props) => {
  const faIcon = icon as IconName;
  const iconCondition: [IconPrefix, IconName] | IconName = [
    "linkedin-in",
    "github",
  ].includes(faIcon)
    ? ["fab", faIcon]
    : faIcon;

  return (
    <div
      className="SidebarItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
    >
      <div className="SidebarItem__icon-container">
        <FontAwesomeIcon icon={iconCondition} />
      </div>
      <span className="SidebarItem__title">{title}</span>
    </div>
  );
};

export default SidebarItem;
