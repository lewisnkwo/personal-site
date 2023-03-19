import { Post } from "../../../types";
import { postListTabIndex } from "../../../utils";
import UserImage from "../../post-image";
import "./index.scss";

export interface Props extends Post {
  onSelect: () => void;
  isSelected: boolean;
  tabIndex: number;
}

const PostItem = ({
  title,
  subtitle,
  image,
  onSelect,
  isSelected,
  tabIndex,
}: Props) => (
  <div
    className={`UserItem${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    role="button"
    aria-label={title}
    tabIndex={tabIndex + postListTabIndex}
  >
    {image && <UserImage image={image} name={title} size="small" />}
    <div className="UserItem__info">
      <span className="UserItem__name">{title}</span>
      <span className="UserItem__role">{subtitle}</span>
    </div>
  </div>
);

export default PostItem;
