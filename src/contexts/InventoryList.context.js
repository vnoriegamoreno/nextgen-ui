import { createContext, useReducer } from "react";

export const ACTIONS = {
  LOAD_INVENTORY_LIST: "LOAD_INVENTORY_LIST",
  ADD_CAR_INVENTORY_LIST: "ADD_CAR_INVENTORY_LIST",
  TOGGLE_INVENTORY_MANAGER: "TOGGLE_INVENTORY_MANAGER",
  TOGGLE_FILTERS: "TOGGLE_FILTERS",
  TOGGLE_MODAL: "TOGGLE_MODAL",
  SEARCH_FILTERS: "SEARCH_FILTERS",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.LOAD_INVENTORY_LIST:
      return { ...state, inventorylist: action.payload };
    case ACTIONS.ADD_CAR_INVENTORY_LIST:
      return {
        ...state,
        inventorylist: state.inventorylist.concat(action.payload),
      };
    case ACTIONS.TOGGLE_INVENTORY_MANAGER:
      return {
        ...state,
        inventorymanager: {
          ...state.inventorymanager,
          show: !state.inventorymanager.show,
        },
      };
    case ACTIONS.SEARCH_FILTERS:
      const newInventory = state.inventorylist.filter(
        (car) => action.payload === car.serialId
      );
      if (!newInventory?.length) {
        return state;
      }
      return {
        ...state,
        inventorylist: newInventory,
      };
    case ACTIONS.TOGGLE_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          isOpen: !state.filters.isOpen,
        },
      };
    case ACTIONS.TOGGLE_MODAL:
      return {
        ...state,
        inventorymanager: {
          ...state.inventorymanager,
          modal: !state.inventorymanager.modal,
        },
      };
    default:
      return state;
  }
};

export const InventoryListContext = createContext();

const InventoryListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    inventorymanager: {
      show: true,
      modal: false,
    },
    filters: {
      isOpen: false,
    },
    inventorylist: [],
  });

  return (
    <InventoryListContext.Provider value={{ state, dispatch }}>
      {children}
    </InventoryListContext.Provider>
  );
};

export default InventoryListProvider;
