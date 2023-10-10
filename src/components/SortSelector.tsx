import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}
const SortSelector = ({ onSelectedSortOrder, sortOrder }: Props) => {
  const listItem = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];
  const sortedData = listItem.filter((item) => item.value === sortOrder);
  console.log(sortedData, "sortedData");
  return (
    <>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>
          Order By: {sortedData.map((item) => item.label)}
        </MenuButton>
        <MenuList>
          {listItem.map((item) => (
            <MenuItem
              onClick={() => onSelectedSortOrder(item.value)}
              key={item.value}
              value={item.value}
            >
              {item.label}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default SortSelector;
