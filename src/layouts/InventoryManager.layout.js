import HeaderLayout from "./shared/Header.layout";
import InventoryListLayout from "./shared/InventoryList.layout";
import SidebarLayout from "./shared/Sidebar.layout";

import { Grid } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f4f5f7;
  height: 100vh;
`;

const LeftContainer = styled(Grid)`
  width: 50px;
`;

const RightContainer = styled(Grid)`
  width: calc(100% - 50px);
`;

const InventoryManagerLayout = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <HeaderLayout />
        </Grid>
        <LeftContainer>
          <SidebarLayout />
        </LeftContainer>
        <RightContainer>
          <InventoryListLayout />
        </RightContainer>
      </Grid>
    </Container>
  );
};

export default InventoryManagerLayout;
