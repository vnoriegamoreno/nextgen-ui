import { Typography } from "@mui/material";
import styled from "styled-components";

export const StyledContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const StyledBackground = styled.div`
  background-color: #2277d0;
  border-radius: 50%;
  height: 50px;
  margin: auto;
  width: 50px;

  @media (min-width: 480px) {
    height: 65px;
    width: 65px;
  }
`;

export const StyledTypography = styled(Typography)`
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 400px) {
    font-size: 1.2rem;
  }
`;
