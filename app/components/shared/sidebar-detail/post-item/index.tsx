interface Props {
  label: string;
  value: string;
}

const SidebarDetailItem = ({ label, value }: Props) => (
  <div className="SidebarDetail__item">
    <div className="SidebarDetail__item-name">{label}</div>
    <div className="SidebarDetail__item-value">{value}</div>
  </div>
);

export default SidebarDetailItem;
