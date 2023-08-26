import { useContext } from "react";
import HeaderLayout from "./shared/header/Header.layout";
import InventoryListLayout from "./shared/inventory-list/InventoryList.layout";
import SidebarLayout from "./shared/sidebar/Sidebar.layout";
import FiltersLayout from "./shared/filters/Filters.layout";
import ModalLayout from "./shared/modal/ModalLayout";
import {
  StyledContainer,
  StyledTopContainer,
  StyledLeftContainer,
  StyledMiddleContainer,
  StyledRightContainer,
} from "./StyledComponents";
import { Grid } from "@mui/material";
import { InventoryListContext } from "contexts/InventoryList.context";

const InventoryManagerLayout = () => {
  const { state } = useContext(InventoryListContext);

  return (
    <StyledContainer>
      <Grid container>
        <StyledTopContainer item xs={12}>
          <HeaderLayout />
        </StyledTopContainer>
        <StyledLeftContainer>
          <SidebarLayout />
        </StyledLeftContainer>
        <StyledMiddleContainer>
          <FiltersLayout />
        </StyledMiddleContainer>
        <StyledRightContainer>
          <InventoryListLayout />
        </StyledRightContainer>
      </Grid>
      {state.filters.isOpen && <FiltersLayout />}
      <ModalLayout />
    </StyledContainer>
  );
};

export default InventoryManagerLayout;
