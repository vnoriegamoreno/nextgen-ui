import { Grid } from "@mui/material";
import {
  StyledRow,
  StyledTextField,
  StyledTypography,
  StyledButton,
  StyledClearButton,
} from "./StyledComponents";

const AddVehicleForm = () => {
  return (
    <Grid container>
      <StyledRow marginBottom="30px" item xs={12}>
        <StyledTypography variant="body">VEHICLE INFORMATION</StyledTypography>
      </StyledRow>
      <StyledRow item xs={6}>
        <StyledTextField marginBottom="20px" label="Make" />
        <StyledTextField marginBottom="20px" label="Package" />
        <StyledTextField marginBottom="20px" label="Year" />
        <StyledTextField marginBottom="20px" label="Milleage (ml)" />
        <StyledButton variant="contained">Add vehicle</StyledButton>
      </StyledRow>
      <StyledRow item xs={6}>
        <StyledTextField marginBottom="20px" label="Model" />
        <StyledTextField marginBottom="20px" label="Color" />
        <StyledTextField marginBottom="20px" label="Category" />
        <StyledTextField marginBottom="20px" label="Price" />
        <StyledClearButton variant="contained">Cancel</StyledClearButton>
      </StyledRow>
    </Grid>
  );
};

export default AddVehicleForm;
