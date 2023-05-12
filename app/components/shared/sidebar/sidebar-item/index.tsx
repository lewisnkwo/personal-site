import type { SidebarItem as SidebarItemT } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type {
  IconName,
  IconPrefix,
} from "@fortawesome/fontawesome-common-types";
import { Link } from "@remix-run/react";

interface Props extends SidebarItemT {
  tabIndex: number;
}

const SidebarItem = ({ icon, title, slug, external, tabIndex }: Props) => {
  const faIcon = icon as IconName;
  const iconCondition: [IconPrefix, IconName] | IconName = [
    "linkedin-in",
    "github",
  ].includes(faIcon)
    ? ["fab", faIcon]
    : faIcon;

  return (
    <Link
      className="SidebarItem"
      role="menuitem"
      aria-label={title}
      tabIndex={tabIndex + 1}
      to={external ?? `/${slug ?? ""}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      <div className="SidebarItem__icon-container">
        <FontAwesomeIcon icon={iconCondition} />
      </div>
      <span className="SidebarItem__title">{title}</span>
    </Link>
  );
};

export default SidebarItem;
