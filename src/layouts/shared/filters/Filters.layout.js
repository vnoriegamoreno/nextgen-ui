import { useState, useContext } from "react";
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
  const [serializedID, setSerializedID] = useState("");

  const { dispatch } = useContext(InventoryListContext);

  const searchHandler = () => {
    dispatch({ type: ACTIONS.SEARCH_FILTERS, payload: serializedID });
    dispatch({ type: ACTIONS.TOGGLE_FILTERS });
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
