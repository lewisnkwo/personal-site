import { render, screen } from "@testing-library/react";
import UserImage from ".";
import contact from "../../images/contact.svg";

describe("UserImage", () => {
  it("renders an image when the image is available", () => {
    render(<UserImage size="small" image={contact} name="John Doe" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.queryByText("LN")).not.toBeInTheDocument();
  });

  it("renders the correct initials when the image is unavailable", () => {
    render(<UserImage size="medium" image={null} name="Lewis Nkwo" />);
    expect(screen.getByText("LN")).toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});
