import { TextField, Grid, Button } from "@mui/material";
import styled from "styled-components";

export const StyledGrid = styled(Grid)`
  text-align: center;
`;

export const StyledTextField = styled(TextField)`
  margin: 50px auto 20px auto !important;
  background-color: #f4f5f7;
  width: 80%;
  border-radius: 5px;
  & .MuiInputBase-input {
    border: 0px !important;
  }
`;

export const StyledButton = styled(Button)`
  margin: auto !important;
  padding: 10px !important;
  width: 80%;
  font-size: 1.2rem !important;
`;

export const StyledContainer = styled.div`
  background: #fff;
  border-right: 2px solid #e8ebef;
  width: calc(30vh - 2px);
  height: 100%;

  @media (max-width: 900px) {
    position: fixed;
    height: calc(100% - 13vh);
    z-index: 1;
    top: 13vh;
    left: 50px;
    width: calc(100% - 50px);
  }
`;
