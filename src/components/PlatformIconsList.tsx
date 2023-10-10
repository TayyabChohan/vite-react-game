import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from 'react-icons'
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import { HStack, Icon, Text } from "@chakra-ui/react";
interface Props {
  ptlatforms: Platform[];
}
const PlatformIconsList = ({ ptlatforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    pc: FaWindows,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    playstation: FaPlaystation,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    xbox: FaXbox,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    nintondo: SiNintendo,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    mac: FaApple,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    linux: FaLinux,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    ios: MdPhoneIphone,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    web: BsGlobe,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    android: FaAndroid,
  };
  return (
    <HStack marginY={3}>
      {ptlatforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500"/>
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
