import { useState } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ElementProps } from "~/types";

interface Props {
  children: React.ReactNode & React.ReactNode[];
}

const CopyCodeButton = ({ children }: Props) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const onCopy = () => {
    const childrenWithProps = React.Children.map(
      children,
      (child) => child as React.ReactElement<ElementProps>
    );

    childrenWithProps &&
      navigator.clipboard.writeText(childrenWithProps[0]?.props?.children[0]);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 500);
  };

  return (
    <button onClick={onCopy}>
      <FontAwesomeIcon
        icon={isCopied ? "check-square" : "copy"}
        color={isCopied ? "#88C0D0" : "#2e3440"}
      />
    </button>
  );
};

export default CopyCodeButton;
