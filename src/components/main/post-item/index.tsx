import { Post } from "../../../types";
import { postListTabIndex } from "../../../utils";
import PostImage from "../../post-image";
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
    className={`PostItem${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    role="button"
    aria-label={title}
    tabIndex={tabIndex + postListTabIndex}
  >
    {image && <PostImage image={image} name={title} size="small" />}
    <div className="PostItem__info">
      <span className="PostItem__title">{title}</span>
      <span className="PostItem__subtitle">{subtitle}</span>
    </div>
  </div>
);

export default PostItem;
