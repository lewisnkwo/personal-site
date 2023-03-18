import { Size } from "../../types";
import { createInitials } from "../../utils";
import "./index.scss";

interface Props {
  image: string | null;
  name: string;
  size: Size;
}

const UserImage = ({ image, name, size }: Props) => (
  <div className={`UserImage--${size}`} aria-label={`Image of ${name}`}>
    {image !== null ? (
      <img className="UserImage__image" src={image} alt={name} />
    ) : (
      <span className="UserImage__initials">{createInitials(name)}</span>
    )}
  </div>
);

export default UserImage;
