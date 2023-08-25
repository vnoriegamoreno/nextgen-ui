import HeaderLayout from "./shared/Header.layout";
import InventoryListLayout from "./shared/InventoryList.layout";
import SidebarLayout from "./shared/Sidebar.layout";

import { Grid } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f5f7;
  height: 100vh;
`;

const InventoryManagerLayout = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <HeaderLayout />
        </Grid>
        <Grid item xs={2}>
          <SidebarLayout />
        </Grid>
        <Grid item xs={10}>
          <InventoryListLayout />
        </Grid>
      </Grid>
    </Container>
  );
};

export default InventoryManagerLayout;
