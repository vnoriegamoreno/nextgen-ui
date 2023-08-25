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
  StyledFontAwesomeIcon,
} from "./StyledComponents";
import { Grid } from "@mui/material";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import utils from "utils";

const Car = (props) => {
  const [details, setDetails] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const getPrice = ({ price }) => utils.formatPrice((price || 0) / 100);
  const toggleDetails = () => setDetails(!details);

  return (
    <StyledWrapper>
      <StyledGrid container>
        <StyledInnerGrid container>
          <Grid item xs={12}>
            <StyledTypography variant="body1">{`${utils.stringSanity(
              props.year,
              new Date(Date.now()).getFullYear()
            )}, ${utils.stringSanity(
              props.category,
              "No Category"
            )}`}</StyledTypography>
          </Grid>
        </StyledInnerGrid>
        <StyledInnerGrid align="right" container>
          <Grid item xs={12}>
            <StyledFontAwesomeIcon
              icon={faHeart}
              color={favorite ? "#2277d0" : "#fff"}
              onClick={() => setFavorite(!favorite)}
            />
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
            {`${utils.stringSanity(props.make, "No Make")} ${utils.stringSanity(
              props.model,
              "No Model"
            )} ${utils.stringSanity(props.package, "No Package")}`}
          </StyledTypography>
        </StyledInnerGrid>
        {details && (
          <StyledInnerGrid container>
            <StyledInnerGrid item align="center" xs={4} border="true">
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.color}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {utils.stringSanity(props.color, "No Color")}
              </StyledTypography>
            </StyledInnerGrid>
            <StyledInnerGrid item align="center" xs={4} border="true">
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.mileage}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {utils.formatMileage(props.mileage || 0)}
              </StyledTypography>
            </StyledInnerGrid>
            <StyledInnerGrid item align="center" xs={4}>
              <StyledTypography variant="body" margin="5px auto">
                {utils.constants.carTexts.ID}
              </StyledTypography>
              <StyledTypography variant="body" margin="20px auto">
                {utils.stringSanity(props.serialId, "#####")}
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
