import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const myRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <form
        style={{ width: "100%" }}
        onSubmit={(e) => {
          e.preventDefault();
          if (myRef.current) onSearch(myRef.current.value);
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={myRef}
            borderRadius={20}
            placeholder="Search Input"
            variant="filled"
          />
        </InputGroup>
      </form>
    </>
  );
};

export default SearchInput;
