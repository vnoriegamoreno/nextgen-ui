import { Typography } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

const Background = styled.div`
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

const Name = styled(Typography)`
  color: #fff;
  font-weight: bold;
  font-size: 0.9rem;

  @media (min-width: 400px) {
    font-size: 1.2rem;
  }
`;

const Avatar = ({ name = "NXG" }) => (
  <Container>
    <Background>
      <Container>
        <Name variant="body">{name}</Name>
      </Container>
    </Background>
  </Container>
);

export default Avatar;
