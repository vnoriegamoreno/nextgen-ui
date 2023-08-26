import { TextField, Button, Typography, Grid } from "@mui/material";
import styled from "styled-components";

export const StyledTypography = styled(Typography)`
  font-seize: 2rem !important:
  font-weight: bold;
`;

export const StyledRow = styled(Grid)`
  margin-bottom: ${({ marginbottom }) =>
    marginbottom ? marginbottom : "10px"} !important;
`;

export const StyledTextField = styled(TextField)`
  margin: 10px auto !important;
  margin-bottom: ${({ marginbottom }) =>
    marginbottom ? marginbottom : "10px"} !important;
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
  font-size: 0.7rem !important;
  font-weight: bold !important;
`;

export const StyledClearButton = styled(StyledButton)`
  background-color: #d00404 !important;
`;
