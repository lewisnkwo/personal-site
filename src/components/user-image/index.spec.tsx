import { render, screen } from "@testing-library/react";
import UserImage from ".";
import author from "../../images/lewisnkwo.png";

describe("UserImage", () => {
  it("renders an image when the image is available", () => {
    render(<UserImage size="small" image={author} name="Lewis Nkwo" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
