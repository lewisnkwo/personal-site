import type { Post } from "../../../types";
import { postListTabIndex } from "../../../utils";

export interface Props extends Post {
  onSelect: () => void;
  isSelected: boolean;
  tabIndex: number;
}

const PostItem = ({
  title,
  subtitle,
  onSelect,
  isSelected,
  tabIndex,
}: Props) => (
  <button
    className={`PostItem${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    aria-label={title}
    tabIndex={tabIndex + postListTabIndex}
  >
    <div className="PostItem__info">
      <span className="PostItem__title">{title}</span>
      <span className="PostItem__subtitle">{subtitle}</span>
    </div>
  </button>
);

export default PostItem;
