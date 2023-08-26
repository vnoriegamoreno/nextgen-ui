import { useState } from "react";
import { Grid } from "@mui/material";
import {
  StyledRow,
  StyledTextField,
  StyledTypography,
  StyledButton,
  StyledClearButton,
} from "./StyledComponents";

const AddVehicleForm = () => {
  const [make, setMake] = useState("");
  const [fieldPackage, setFieldPackage] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const verifyFields = () => {
    if (
      !make ||
      !fieldPackage ||
      !year ||
      !mileage ||
      !model ||
      !color ||
      !category ||
      !price
    ) {
      return false;
    }
    return true;
  };

  const onSubmitHandler = () => {
    if (verifyFields()) {
      // TODO: call endpoint with all props
    } else {
      alert("Missing fields");
    }
  };

  const validateNumber = (input) => {
    return input === "" || /^-?\d+(\.\d+)?$/.test(input);
  };

  return (
    <Grid container>
      <StyledRow marginbottom="30px" item xs={12}>
        <StyledTypography variant="body">VEHICLE INFORMATION</StyledTypography>
      </StyledRow>
      <StyledRow item xs={6}>
        <StyledTextField
          onChange={(e) => setMake(e.target.value)}
          value={make}
          marginbottom="20px"
          label="Make"
        />
        <StyledTextField
          onChange={(e) => setFieldPackage(e.target.value)}
          value={fieldPackage}
          marginbottom="20px"
          label="Package"
        />
        <StyledTextField
          onChange={(e) =>
            validateNumber(e.target.value) && setYear(e.target.value)
          }
          value={year}
          marginbottom="20px"
          label="Year"
        />
        <StyledTextField
          onChange={(e) =>
            validateNumber(e.target.value) && setMileage(e.target.value)
          }
          value={mileage}
          marginbottom="20px"
          label="Milleage (ml)"
        />
        <StyledButton variant="contained" onClick={onSubmitHandler}>
          Add vehicle
        </StyledButton>
      </StyledRow>
      <StyledRow item xs={6}>
        <StyledTextField
          onChange={(e) => setModel(e.target.value)}
          value={model}
          marginbottom="20px"
          label="Model"
        />
        <StyledTextField
          onChange={(e) => setColor(e.target.value)}
          value={color}
          marginbottom="20px"
          label="Color"
        />
        <StyledTextField
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          marginbottom="20px"
          label="Category"
        />
        <StyledTextField
          onChange={(e) =>
            validateNumber(e.target.value) && setPrice(e.target.value)
          }
          value={price}
          marginbottom="20px"
          label="Price"
        />
        <StyledClearButton variant="contained">Cancel</StyledClearButton>
      </StyledRow>
    </Grid>
  );
};

export default AddVehicleForm;
