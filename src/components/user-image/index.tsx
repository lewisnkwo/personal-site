import { Size } from "../../types";
import "./index.scss";

interface Props {
  image: string;
  name: string;
  size: Size;
}

const UserImage = ({ image, name, size }: Props) => (
  <div className={`UserImage--${size}`} aria-label={`Image of ${name}`}>
    <img className="UserImage__image" src={image} alt={name} />
  </div>
);

export default UserImage;
