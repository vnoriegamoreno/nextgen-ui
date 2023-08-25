import { useEffect, useContext } from "react";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";
import Car from "components/car/Car";
import { Grid } from "@mui/material";
import { StyledScrollLayout } from "./StyledComponents";

const InventoryListLayout = () => {
  const { inventorylist, dispatch } = useContext(InventoryListContext);

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
  }, []);

  return (
    <StyledScrollLayout data-testid="scrollable-container">
      <Grid container>
        {inventorylist?.length &&
          inventorylist.map((item) => (
            <Grid key={item.serialId} item xs={12} md={6}>
              <Car {...item} />
            </Grid>
          ))}
      </Grid>
    </StyledScrollLayout>
  );
};

export default InventoryListLayout;