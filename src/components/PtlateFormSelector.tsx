import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatForm, { Platform } from "../hooks/usePlatForm";
interface Props {
  onSelectPlatForm: (platform: Platform) => void;
  isSelectedPlatForm: Platform | null;
}

const PtlateFormSelector = ({
  isSelectedPlatForm,
  onSelectPlatForm,
}: Props) => {
  const { isData } = usePlatForm();
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          {" "}
          {isSelectedPlatForm?.name || "PlatForm"}
        </MenuButton>
        <MenuList>
          {isData.map((item) => (
            <MenuItem onClick={() => onSelectPlatForm(item)}>
              {item.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PtlateFormSelector;
