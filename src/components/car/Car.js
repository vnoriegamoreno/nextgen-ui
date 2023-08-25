import { useState } from "react";
import {
  StyledButton,
  StyledGrid,
  StyledImage,
  StyledInnerGrid,
  StyledLabel,
  StyledPrice,
  StyledTypography,
  StyledWrapper,
} from "./StyledComponents";
import { Grid } from "@mui/material";
import utils from "utils";

const Car = (props) => {
  const [details, setDetails] = useState(false);

  const getPrice = ({ price }) => utils.formatPrice(price / 100);
  const toggleDetails = () => setDetails(!details);

  return (
    <StyledWrapper>
      <StyledGrid container>
        <StyledInnerGrid container>
          <Grid item xs={12}>
            <StyledTypography variant="body1">{`${props.year}, ${props.category}`}</StyledTypography>
          </Grid>
        </StyledInnerGrid>
        <StyledInnerGrid align="center" container>
          <StyledImage src="/images/generic_car.png" transform="true" />
        </StyledInnerGrid>
        <StyledInnerGrid padding="5px 0px" container>
          <StyledTypography variant="body">
            <StyledLabel>{utils.constants.carTexts.price}</StyledLabel>
            <StyledPrice>{getPrice(props)}</StyledPrice>
          </StyledTypography>
        </StyledInnerGrid>
        <StyledInnerGrid padding="5px 0px" align="center" container>
          <StyledTypography variant="h4" color="#424242">
            {`${props.make} ${props.model} ${props.package}`}
          </StyledTypography>
        </StyledInnerGrid>
        {details && (
          <StyledInnerGrid container>
            <StyledInnerGrid item align="center" xs={4} border="true">
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.color}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {props.color}
              </StyledTypography>
            </StyledInnerGrid>
            <StyledInnerGrid item align="center" xs={4} border="true">
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.mileage}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {utils.formatMileage(props.mileage)}
              </StyledTypography>
            </StyledInnerGrid>
            <StyledInnerGrid item align="center" xs={4}>
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.ID}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {props.serialId}
              </StyledTypography>
            </StyledInnerGrid>
          </StyledInnerGrid>
        )}
        <StyledInnerGrid padding="5px 0px" align="center" container>
          <StyledButton variant="contained" onClick={toggleDetails}>{`${
            !details ? "Show " : "Hide"
          } Details`}</StyledButton>
        </StyledInnerGrid>
      </StyledGrid>
    </StyledWrapper>
  );
};

export default Car;
