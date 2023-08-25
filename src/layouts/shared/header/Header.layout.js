import React from "react";
import Avatar from "components/avatar/Avatar";
import { Grid } from "@mui/material";
import {
  StyledContainer,
  StyledTypography,
  StyledLogo,
} from "./StyledComponents";

const HeaderLayout = () => {
  return (
    <StyledContainer container>
      <Grid item xs={2}>
        <StyledLogo />
      </Grid>
      <Grid item xs={8}>
        <StyledTypography>NextGen Inventory Management</StyledTypography>
      </Grid>
      <Grid item xs={2}>
        <Avatar />
      </Grid>
    </StyledContainer>
  );
};

export default HeaderLayout;
