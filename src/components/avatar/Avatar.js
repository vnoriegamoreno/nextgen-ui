import {
  StyledContainer,
  StyledBackground,
  StyledTypography,
} from "./StyledComponents";

const Avatar = ({ name = "NXG" }) => (
  <StyledContainer>
    <StyledBackground>
      <StyledContainer>
        <StyledTypography variant="body">{name}</StyledTypography>
      </StyledContainer>
    </StyledBackground>
  </StyledContainer>
);

export default Avatar;
