import { render, screen } from "@testing-library/react";
import Avatar from "components/avatar/Avatar";

describe("Avatar", () => {
  describe("when no pass parameters", () => {
    it("should render default avatar name", () => {
      render(<Avatar />);
      const element = screen.getByText("NXG");
      expect(element).toBeInTheDocument();
    });
  });
  describe("when pass name parameter", () => {
    it("should render avatar name", () => {
      render(<Avatar name="VN" />);
      const element = screen.getByText("VN");
      expect(element).toBeInTheDocument();
    });
  });
});
