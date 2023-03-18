import { UserListItem } from "../../../types";
import { userListTabIndex } from "../../../utils";
import UserImage from "../../user-image";
import "./index.scss";

export interface Props extends UserListItem {
  onSelect: () => void;
  isSelected: boolean;
  tabIndex: number;
}

const UserItem = ({ name, picture, onSelect, isSelected, tabIndex }: Props) => (
  <div
    className={`UserItem${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    role="button"
    aria-label={`${name} - Developer`}
    tabIndex={tabIndex + userListTabIndex}
  >
    <UserImage image={picture} name={name} size="small" />
    <div className="UserItem__info">
      <span className="UserItem__name">{name}</span>
      <span className="UserItem__role">Developer</span>
    </div>
  </div>
);

export default UserItem;
