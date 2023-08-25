import { Grid } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: #f4f5f7;
  height: 100vh;
`;

export const StyledLeftContainer = styled(Grid)`
  width: 50px;
`;

export const StyledRightContainer = styled(Grid)`
  width: calc(100% - 50px);
`;
