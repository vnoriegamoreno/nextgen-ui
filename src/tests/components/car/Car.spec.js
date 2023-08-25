import { render, screen, fireEvent } from "@testing-library/react";
import Car from "components/car/Car";

describe("Car", () => {
  describe("Render component without props", () => {
    it("should not crash", () => {
      render(<Car />);
      const element = screen.getByText("PRICE");
      expect(element).toBeInTheDocument();
    });
    it("should sanitisy props correctly", () => {
      render(<Car />);
      expect(screen.getByText("2023, No Category")).toBeInTheDocument();
      expect(screen.getByText("$0.00")).toBeInTheDocument();
      expect(
        screen.getByText("No Make No Model No Package")
      ).toBeInTheDocument();
    });
  });
  describe("Render component with props", () => {
    const mockProps = {
      year: "1984",
      category: "Hashback",
      price: "399500",
      model: "Vocho",
      make: "Volkswagen",
      package: "Base",
      color: "Aquagreen",
      mileage: "67000",
      serialId: "1a9Jrew3",
    };
    it("should display correctly", () => {
      render(<Car {...mockProps} />);
      expect(screen.getByText("1984, Hashback")).toBeInTheDocument();
      expect(screen.getByText("$3,995.00")).toBeInTheDocument();
      expect(screen.getByText("Volkswagen Vocho Base")).toBeInTheDocument();
    });
    describe("Show details", () => {
      it("should details render successfully", () => {
        render(<Car {...mockProps} />);
        const btn = screen.getByText("Show Details");
        fireEvent.click(btn);
        expect(screen.getByText("Aquagreen")).toBeInTheDocument();
        expect(screen.getByText("67,000")).toBeInTheDocument();
        expect(screen.getByText("1a9Jrew3")).toBeInTheDocument();
        expect(screen.getByText("Hide Details")).toBeInTheDocument();
      });
    });
  });
});
