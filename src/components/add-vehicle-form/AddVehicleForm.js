import { useState, useContext } from "react";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";
import { Grid } from "@mui/material";
import {
  StyledRow,
  StyledTextField,
  StyledTypography,
  StyledButton,
  StyledClearButton,
} from "./StyledComponents";
import { v4 as uuidv4 } from "uuid";

const AddVehicleForm = () => {
  const { dispatch } = useContext(InventoryListContext);

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

  const clearForm = () => {
    setMake("");
    setFieldPackage("");
    setYear("");
    setMileage("");
    setModel("");
    setColor("");
    setCategory("");
    setPrice("");
  };

  const onCloseHandler = () => {
    clearForm();
    dispatch({ type: ACTIONS.TOGGLE_MODAL });
  };

  const onSubmitHandler = () => {
    if (verifyFields()) {
      // TODO: call endpoint with all props
      dispatch({
        type: ACTIONS.ADD_CAR_INVENTORY_LIST,
        payload: {
          make,
          package: fieldPackage,
          year,
          mileage,
          model,
          color,
          category,
          price,
          serialId: uuidv4().split("-")[0],
        },
      });
      onCloseHandler();
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
        <StyledClearButton variant="contained" onClick={onCloseHandler}>
          Close
        </StyledClearButton>
      </StyledRow>
    </Grid>
  );
};

export default AddVehicleForm;
