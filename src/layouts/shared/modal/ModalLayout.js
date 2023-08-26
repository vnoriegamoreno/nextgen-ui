import { Modal } from "@mui/material";
import { StyledBox } from "./StyledComponents";
import AddVehicleForm from "components/add-vehicle-form/AddVehicleForm";

const ModalLayout = () => {
  return (
    <Modal open={true} data-testid="vehicle-modal">
      <StyledBox>
        <AddVehicleForm />
      </StyledBox>
    </Modal>
  );
};

export default ModalLayout;
