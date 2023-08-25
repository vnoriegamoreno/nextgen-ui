import { render, screen, fireEvent } from "@testing-library/react";
import SidebarLayout from "layouts/shared/sidebar/Sidebar.layout";
import InventoryListProvider from "contexts/InventoryList.context";

const mockContext = {
  inventorymanager: true,
  filters: false,
};

describe("SidebarLayout", () => {
  it("it should render without crash", () => {
    render(
      <InventoryListProvider value={mockContext}>
        <SidebarLayout />
      </InventoryListProvider>
    );
    expect(screen.queryByTestId("nav-inventory-manager")).toBeInTheDocument();
    expect(screen.getByTestId("nav-filters")).toBeInTheDocument();
  });
});
