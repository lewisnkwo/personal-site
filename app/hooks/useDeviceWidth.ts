import { useEffect, useState } from "react";

export const useDeviceWidth = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return isMobile;
};
