import { Box } from "@mui/material";
import styled from "styled-components";

export const StyledBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background-color: #fff;
  text-align: center;
  box-shadow: 4px 4px 7px rgb(0 0 0 / 0.25);
  padding: 20px;
`;
