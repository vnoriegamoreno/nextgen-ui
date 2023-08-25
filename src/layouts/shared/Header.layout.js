import React from "react";
import styled from "styled-components";
import { Grid, Typography } from "@mui/material";
import Avatar from "components/avatar/Avatar";

const ContainerStyled = styled(Grid)`
  background-color: #fff;
  height: 13vh;
  box-shadow: 4px 4px 7px silver;
`;

const Logo = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid #e8ebef;
`;

const TypographyStyled = styled(Typography)`
  align-items: center;
  border-right: 2px solid #e8ebef;
  display: flex;
  flex-direction: row;
  font-size: 0.8rem !important;
  font-weight: bold !important;
  height: 100%;
  justify-content: center;

  @media (min-width: 400px) {
    justify-content: left;
    padding-left: 20px;
    font-size: 0.9rem !important;
  }
`;

const HeaderLayout = () => {
  return (
    <ContainerStyled container>
      <Grid item xs={2}>
        <Logo />
      </Grid>
      <Grid item xs={8}>
        <TypographyStyled>NextGen Inventory Management</TypographyStyled>
      </Grid>
      <Grid item xs={2}>
        <Avatar />
      </Grid>
    </ContainerStyled>
  );
};

export default HeaderLayout;
