import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorMode = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch backdropBlur='green' isChecked={colorMode === "dark"} onChange={toggleColorMode} />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ColorMode;
