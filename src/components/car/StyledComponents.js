import { Button, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components/";

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 2rem;
  background: #ebecef;
  padding: 10px;
  border-radius: 5px;
  color: ${({ color }) => color || "#fff"};
`;

export const StyledTypography = styled(Typography)`
  color: ${({ color }) => color || "inherit"};
  display: ${({ display }) => display || "block"};
  width: ${({ width }) => width || "100%"};
  font-weight: bold !important;
  letter-spacing: ${({ letterSpacing }) =>
    letterSpacing || "inherit"} !important;
`;

export const StyledGrid = styled(Grid)`
  background-color: #fff;
  padding: 10px;
`;

export const StyledInnerGrid = styled(Grid)`
  text-align: ${({ align }) => align || "left"};
  margin: ${({ padding }) => padding || "0"};
  padding: ${({ padding }) => padding || "0"};
  ${({ border }) => (border ? "border-right: 1px solid #E8EBEF" : "")};
`;

export const StyledButton = styled(Button)`
  margin: auto !important;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  margin: 30px 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  margin: 0px auto;
  transform: ${({ transform }) => (transform ? "scaleX(-1)" : "inherit")};
`;

export const StyledLabel = styled.span`
  font-size: 10px;
  color: #707070;
`;

export const StyledPrice = styled.span`
  color: #3b8462;
  font-size: 18px;
  margin-left: 2px;
`;
