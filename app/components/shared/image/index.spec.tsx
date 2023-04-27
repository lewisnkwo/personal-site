import { render, screen } from "@testing-library/react";
import Image from ".";

describe("Image", () => {
  it("renders an image when the image is available", () => {
    render(
      <Image
        size="small"
        image="../../../images/lewisnkwo.png"
        name="Lewis Nkwo"
      />
    );
    expect(screen.getByRole("img")).toBeInTheDocument();
  });
});
