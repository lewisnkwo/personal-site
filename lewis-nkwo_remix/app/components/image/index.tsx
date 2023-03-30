import { Size } from "../../types";
import "./index.scss";

interface Props {
  image: string;
  name: string;
  size: Size;
}

const Image = ({ image, name, size }: Props) => (
  <div className={`Image--${size}`} aria-label={`Image of ${name}`}>
    <img className="Image__img" src={image} alt={name} />
  </div>
);

export default Image;
