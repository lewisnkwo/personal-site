import { screen, render, fireEvent } from "@testing-library/react";
import CopyCodeButton from "./copy-button";
import { createElement } from "react";

describe("CopyCodeButton", () => {
  it("should copy the code snippet when clicked", () => {
    const clipboardWriteTextMock = jest.fn();

    Object.assign(navigator, {
      clipboard: {
        writeText: clipboardWriteTextMock,
      },
    });

    const childElementWithCode = createElement("span", {
      children: ["// route/to/example-file.tsx"],
    });

    render(
      <CopyCodeButton>
        {childElementWithCode}
        <span>Other child...</span>
      </CopyCodeButton>
    );

    fireEvent.click(screen.getByRole("button"));

    expect(clipboardWriteTextMock).toHaveBeenCalledWith(
      "// route/to/example-file.tsx"
    );
  });
});
