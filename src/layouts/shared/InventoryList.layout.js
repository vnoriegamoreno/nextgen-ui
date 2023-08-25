import { useEffect, useContext } from "react";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";
import { Grid } from "@mui/material";
import Car from "components/car/Car";

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
    <Grid container>
      {inventorylist?.length &&
        inventorylist.map((item) => (
          <Grid key={item.serialId} item xs={12} md={6}>
            <Car {...item} />
          </Grid>
        ))}
    </Grid>
  );
};

export default InventoryListLayout;
