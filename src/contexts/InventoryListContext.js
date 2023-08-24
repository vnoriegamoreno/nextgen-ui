import React, { createContext, useReducer } from "react";

export const ACTION = {
  ADD_CAR_INVENTORY_LIST: "ADD_CAR_INVENTORY_LIST",
};

const inventoryListReducer = (state, action) => {
  switch(action.type) {
    case ACTION.ADD_CAR_INVENTORY_LIST:
      return state;
    default:
      return state;
  }
};

export const InventoryListContext = createContext();

export const InventoryListProvider = ({ children }) => {
  const [inventorylist, dispatch] = useReducer(inventoryListReducer, []);

  return (
    <InventoryListContext.Provider value={{ inventorylist, dispatch }}>
      {children}
    </InventoryListContext.Provider>
  );
};