import "./index.scss";

interface Props {
  label: string;
  value: string;
}

const SidebarUserItem = ({ label, value }: Props) => (
  <div className="SidebarUser__item">
    <div className="SidebarUser__item-name">{label}</div>
    <div className="SidebarUser__item-value">{value}</div>
  </div>
);

export default SidebarUserItem;
