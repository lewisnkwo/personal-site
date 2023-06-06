import type { Post } from "../../../types";

export interface Props extends Partial<Post> {
  onSelect: (id: string) => void;
  isSelected?: boolean;
  tabIndex: number;
}

const PostItem = ({
  id,
  title,
  subtitle,
  onSelect,
  isSelected,
  tabIndex,
}: Props) => (
  <button
    className={`PostItem${isSelected ? "--selected" : ""}`}
    onClick={() => id && onSelect(id)}
    aria-label={title}
    tabIndex={tabIndex}
  >
    <div className="PostItem__info">
      <span className="PostItem__title">{title}</span>
      <span className="PostItem__subtitle">{subtitle}</span>
    </div>
  </button>
);

export default PostItem;
