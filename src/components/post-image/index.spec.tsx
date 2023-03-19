import { render, screen } from "@testing-library/react";
import PostImage from ".";
import author from "../../images/lewisnkwo.png";

describe("PostImage", () => {
  it("renders an image when the image is available", () => {
    render(<PostImage size="small" image={author} name="Lewis Nkwo" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
