import { Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export const StyledScrollLayout = styled.div`
  overflow-y: scroll;
  margin-top: 10px;
  height: calc(100vh - 13vh - 10px);
`;

export const StyledButtonWrapper = styled.div`
  width: 100%;
  text-align: right;
  margin-top: 20px;
  margin-right: 20px;
`;

export const StyledButton = styled(Button)`
  padding: 10px 30px !important;
  font-weight: bold !important;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;
