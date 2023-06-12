import type { Post } from "../../../types";

export interface Props extends Partial<Post> {
  onSelect: (slug: string) => void;
  isSelected?: boolean;
  tabIndex: number;
}

const PostItem = ({
  slug,
  title,
  subtitle,
  onSelect,
  isSelected,
  tabIndex,
}: Props) => (
  <button
    className={`PostItem${isSelected ? "--selected" : ""}`}
    onClick={() => slug && onSelect(slug)}
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
