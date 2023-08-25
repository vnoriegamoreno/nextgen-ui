import { render, screen } from "@testing-library/react";
import Car from "components/car/Car";

describe("Car", () => {
  it("should render without crash", () => {
    render(<Car />);
    const element = screen.getByText("PRICE");
    expect(element).toBeInTheDocument();
  });
});
