import InventoryListProvider from "contexts/InventoryList.context";
import InventoryManagerLayout from "layouts/InventoryManager.layout";

function App() {
  return (
    <InventoryListProvider>
      <InventoryManagerLayout />
    </InventoryListProvider>
  );
}

export default App;
