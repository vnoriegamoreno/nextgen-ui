import { useState, useEffect, useContext } from "react";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledGrid,
  StyledTextField,
  StyledButton,
  StyledClearButton,
} from "./StyledComponents";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";

const FiltersLayout = () => {
  const { state, dispatch } = useContext(InventoryListContext);
  const [serializedID, setSerializedID] = useState("");

  useEffect(() => {
    if (state.filters.serialId) {
      setSerializedID(state.filters.serialId);
    }
  }, [state.filters.isOpen]);

  const searchHandler = () => {
    dispatch({ type: ACTIONS.SEARCH_FILTERS, payload: serializedID });
  };

  const clearSearchHandler = () => {
    fetch("http://localhost:8080/api/inventory-list/")
      .then((res) => res.json())
      .then((inventoryList) =>
        dispatch({
          type: ACTIONS.LOAD_INVENTORY_LIST,
          payload: inventoryList.data,
        })
      )
      .catch((err) => console.log(err));
    setSerializedID("");
    dispatch({ type: ACTIONS.CLEAR_FILTERS });
  };

  return (
    <StyledContainer data-testid="filters-layout">
      <Grid container>
        <StyledGrid item xs={12}>
          <StyledTextField
            label="Filter by ID"
            value={serializedID}
            onChange={(e) => setSerializedID(e.target.value)}
          />
          <StyledButton variant="contained" onClick={searchHandler}>
            Search
          </StyledButton>
          <StyledClearButton variant="contained" onClick={clearSearchHandler}>
            Clear search
          </StyledClearButton>
        </StyledGrid>
      </Grid>
    </StyledContainer>
  );
};

export default FiltersLayout;
