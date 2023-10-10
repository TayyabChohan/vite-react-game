import { HStack, Image, Text } from "@chakra-ui/react";
import imgNav from "../assets/assets/images/imgNav.png";
import ColorMode from "../components/ColorMode";
import SearchInput from "../components/SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({onSearch}:Props) => {
  return (
    <>
      <HStack padding="10px">
        <Image src={imgNav} boxSize="60px" borderRadius={30} />
        <SearchInput onSearch={onSearch} />
        <ColorMode />
      </HStack>
    </>
  );
};

export default NavBar;
