import type { SidebarItem as SidebarItemT } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-common-types";
import { useNavigate } from "@remix-run/react";

interface Props extends SidebarItemT {
  tabIndex: number;
}

const SidebarItem = ({ icon, title, slug, tabIndex }: Props) => {
  const faIcon = icon as IconName;
  const iconCondition: [IconPrefix, IconName] | IconName = [
    "linkedin-in",
    "github",
  ].includes(faIcon)
    ? ["fab", faIcon]
    : faIcon;

  const goTo = useNavigate();

  return (
    <div
      className="SidebarItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
      onClick={() => goTo(`/${slug ?? ""}`)}
    >
      <div className="SidebarItem__icon-container">
        <FontAwesomeIcon icon={iconCondition} />
      </div>
      <span className="SidebarItem__title">{title}</span>
    </div>
  );
};

export default SidebarItem;
