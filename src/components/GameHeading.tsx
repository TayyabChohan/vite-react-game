import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const gamesheading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  }`;
  return (
    <>
      <Heading paddingLeft={10} marginBottom={2} as="h1">{gamesheading}</Heading>
    </>
  );
};

export default GameHeading;
