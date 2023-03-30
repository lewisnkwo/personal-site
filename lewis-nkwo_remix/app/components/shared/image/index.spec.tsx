import { render, screen } from "@testing-library/react";
import Image from ".";
import author from "../../images/lewisnkwo.png";

describe("Image", () => {
  it("renders an image when the image is available", () => {
    render(<Image size="small" image={author} name="Lewis Nkwo" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
