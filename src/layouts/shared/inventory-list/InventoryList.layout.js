import React, { useEffect, useContext } from "react";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";
import Car from "components/car/Car";
import { Grid, Typography } from "@mui/material";
import {
  StyledScrollLayout,
  StyledButton,
  StyledButtonWrapper,
  StyledFontAwesomeIcon,
} from "./StyledComponents";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const InventoryListLayout = () => {
  const { state, dispatch } = useContext(InventoryListContext);
  const { inventorylist, inventorymanager } = state;

  useEffect(() => {
    fetch("http://localhost:8080/api/inventory-list/")
      .then((res) => res.json())
      .then((inventoryList) =>
        dispatch({
          type: ACTIONS.LOAD_INVENTORY_LIST,
          payload: inventoryList.data,
        })
      )
      .catch((err) => console.log(err));
  }, [dispatch]);

  return (
    <StyledScrollLayout data-testid="scrollable-container">
      <Grid container>
        <StyledButtonWrapper>
          <StyledButton
            variant="contained"
            onClick={() => dispatch({ type: ACTIONS.TOGGLE_MODAL })}
          >
            <StyledFontAwesomeIcon icon={faPlus} />
            Add vehicle
          </StyledButton>
        </StyledButtonWrapper>
        {inventorymanager.show && inventorylist?.length > 0 ? (
          inventorylist.map((item, index) => (
            <Grid key={`${item.serialId}-${index}`} item xs={12} md={6}>
              <Car {...item} />
            </Grid>
          ))
        ) : (
          <Grid item xs={12}>
            <Typography variant="h6">No data found it</Typography>
          </Grid>
        )}
      </Grid>
    </StyledScrollLayout>
  );
};

export default InventoryListLayout;
