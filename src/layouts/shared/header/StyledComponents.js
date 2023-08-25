import styled from "styled-components";
import { Grid, Typography } from "@mui/material";

export const StyledContainer = styled(Grid)`
  background-color: #fff;
  height: 13vh;
  box-shadow: 4px 4px 7px silver;
`;

export const StyledTypography = styled(Typography)`
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

export const StyledLogo = styled.div`
  width: 100%;
  height: 100%;
  border-right: 2px solid #e8ebef;
`;
