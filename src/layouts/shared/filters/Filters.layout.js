import { useContext } from "react";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledGrid,
  StyledTextField,
  StyledButton,
} from "./StyledComponents";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";

const FiltersLayout = () => {
  const { dispatch } = useContext(InventoryListContext);

  const searchHandler = () => {
    dispatch({ type: ACTIONS.TOGGLE_FILTERS });
  };

  return (
    <StyledContainer data-testid="filters-layout">
      <Grid container>
        <StyledGrid item xs={12}>
          <StyledTextField label="Filter by ID" />
          <StyledButton variant="contained" onClick={searchHandler}>
            Search
          </StyledButton>
        </StyledGrid>
      </Grid>
    </StyledContainer>
  );
};

export default FiltersLayout;
