import HeaderLayout from "./shared/header/Header.layout";
import InventoryListLayout from "./shared/inventory-list/InventoryList.layout";
import SidebarLayout from "./shared/sidebar/Sidebar.layout";
import {
  StyledContainer,
  StyledLeftContainer,
  StyledRightContainer,
} from "./StyledComponents";
import { Grid } from "@mui/material";

const InventoryManagerLayout = () => {
  return (
    <StyledContainer>
      <Grid container>
        <Grid item xs={12}>
          <HeaderLayout />
        </Grid>
        <StyledLeftContainer>
          <SidebarLayout />
        </StyledLeftContainer>
        <StyledRightContainer>
          <InventoryListLayout />
        </StyledRightContainer>
      </Grid>
    </StyledContainer>
  );
};

export default InventoryManagerLayout;
