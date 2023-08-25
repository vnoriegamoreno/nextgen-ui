import { useContext } from "react";
import { InventoryListContext, ACTIONS } from "contexts/InventoryList.context";
import {
  ContainerStyled,
  StyledFontAwesomeIcon,
  StyledNav,
  StyledWrapper,
} from "./StyledComponents";
import { faCar, faWrench } from "@fortawesome/free-solid-svg-icons";

const SidebarLayout = () => {
  const { state, dispatch } = useContext(InventoryListContext);

  const toggleInventoryManager = () =>
    dispatch({ type: ACTIONS.TOGGLE_INVENTORY_MANAGER });

  const toggleFilters = () => dispatch({ type: ACTIONS.TOGGLE_FILTERS });

  return (
    <ContainerStyled>
      <StyledNav>
        <StyledWrapper
          isactive={`${state.inventorymanager}`}
          data-testid="nav-inventory-manager"
        >
          <StyledFontAwesomeIcon
            icon={faCar}
            onClick={toggleInventoryManager}
          />
        </StyledWrapper>
        <StyledWrapper
          filters="true"
          isactive={`${state.filters}`}
          data-testid="nav-filters"
        >
          <StyledFontAwesomeIcon icon={faWrench} onClick={toggleFilters} />
        </StyledWrapper>
      </StyledNav>
    </ContainerStyled>
  );
};

export default SidebarLayout;
