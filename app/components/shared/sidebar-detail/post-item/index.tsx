interface Props {
  label: string;
  value: string;
}

const SidebarDetailItem = ({ label, value }: Props) => (
  <div className="SidebarDetail__item">
    <label className="SidebarDetail__item-name">{label}</label>
    <div className="SidebarDetail__item-value">{value}</div>
  </div>
);

export default SidebarDetailItem;
