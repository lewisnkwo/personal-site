import { Post } from "../../../../types";
import { postListTabIndex } from "../../../../utils";
import Image from "../../image";
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
  <button
    className={`PostItem${isSelected ? "--selected" : ""}`}
    onClick={onSelect}
    aria-label={title}
    tabIndex={tabIndex + postListTabIndex}
  >
    {image && <Image image={image} name={title} size="small" />}
    <div className="PostItem__info">
      <span className="PostItem__title">{title}</span>
      <span className="PostItem__subtitle">{subtitle}</span>
    </div>
  </button>
);

export default PostItem;
