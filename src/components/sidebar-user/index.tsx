import UserImage from "../user-image";
import SidebarUserItem from "./user-item";
import "./index.scss";
import { UserListItem as Props } from "../../types";

const SidebarUser = ({ name, phone, city, email, picture }: Props) => (
  <div className="SidebarUser" aria-label={`${name} - Developer`}>
    <section className="SidebarUser__top">
      <UserImage image={picture} name={name} size="large" />
      <div className="SidebarUser__info">
        <span className="SidebarUser__name">{name}</span>
        <span className="SidebarUser__role">Developer</span>
      </div>
    </section>
    <section className="SidebarUser__items">
      <SidebarUserItem label="City" value={city} />
      <SidebarUserItem label="Cell" value={phone} />
      <SidebarUserItem label="Email" value={email} />
    </section>
  </div>
);

export default SidebarUser;
