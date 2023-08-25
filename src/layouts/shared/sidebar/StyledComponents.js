import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const bool = (condition) => JSON.parse(condition || false);

export const ContainerStyled = styled.div`
  background-color: #2277d0;
  height: calc(100vh - 13vh);
  width: 50px;
  text-align: center;
`;

export const StyledNav = styled.nav`
  position: relative;
  height: 100%;
  padding-top: 10px;
`;

export const StyledWrapper = styled.span`
  position: relative;
  display: inline-block;
  height: 60px;
  width: ${({ isactive }) => (bool(isactive) ? "calc(100% - 5px)" : "100%")};
  border-left: ${({ isactive }) => (bool(isactive) ? "5px solid #fff" : "0px")};
  margin-bottom: 5px;

  @media (min-width: 900px) {
    display: ${({ filters }) => (bool(filters) ? "none" : "inline-block")};
  }
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: calc(-32px / 2);
  margin-left: calc(-32px / 2);
`;
