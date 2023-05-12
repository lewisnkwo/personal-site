import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => (
  <header>
    <button id="menu-button" aria-label="Menu" onClick={onMenuClick}>
      <FontAwesomeIcon icon="bars" />
    </button>
    <button aria-label="Settings">
      <FontAwesomeIcon icon="cog" />
    </button>
  </header>
);

export default Header;
