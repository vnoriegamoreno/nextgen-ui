import { createContext, useReducer } from "react";

export const ACTIONS = {
  LOAD_INVENTORY_LIST: "LOAD_INVENTORY_LIST",
  ADD_CAR_INVENTORY_LIST: "ADD_CAR_INVENTORY_LIST",
};

const inventoryListReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_INVENTORY_LIST:
      return action.payload;
    case ACTIONS.ADD_CAR_INVENTORY_LIST:
      return state.concat(action.payload);
    default:
      return state;
  }
};

export const InventoryListContext = createContext();

const InventoryListProvider = ({ children }) => {
  const [inventorylist, dispatch] = useReducer(inventoryListReducer, []);

  return (
    <InventoryListContext.Provider value={{ inventorylist, dispatch }}>
      {children}
    </InventoryListContext.Provider>
  );
};

export default InventoryListProvider;
