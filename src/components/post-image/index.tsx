import { Size } from "../../types";
import "./index.scss";

interface Props {
  image: string;
  name: string;
  size: Size;
}

const PostImage = ({ image, name, size }: Props) => (
  <div className={`PostImage--${size}`} aria-label={`Image of ${name}`}>
    <img className="PostImage__image" src={image} alt={name} />
  </div>
);

export default PostImage;
