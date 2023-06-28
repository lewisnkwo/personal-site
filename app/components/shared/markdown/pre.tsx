import { useDeviceWidth } from "~/hooks/useDeviceWidth";
import CopyCodeButton from "./copy-button";

interface Props {
  children: React.ReactNode & React.ReactNode[];
}

const Pre = ({ children }: Props) => {
  const isMobile = useDeviceWidth();
  return (
    <pre className="Pre">
      {!isMobile && <CopyCodeButton>{children}</CopyCodeButton>}
      {children}
    </pre>
  );
};

export default Pre;
