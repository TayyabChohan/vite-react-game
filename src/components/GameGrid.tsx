import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
import { Platform } from "../hooks/usePlatForm";
import { GameQuery } from '../App'
interface Props {
  gamequery:GameQuery,
  // isSelectedGenre: Genre | null;
  // isSelectedPlatForm: Platform | null;
}
const GameGrid = ({ gamequery }: Props) => {
  const { isData, isError, isLoading } = useGames(gamequery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // console.log(isGames.length)
  return (
    <>
      {isError && <Text>{isError}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={10}
      >
        {isLoading &&
          Skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {isData.map((item) => (
          <GameCardContainer key={item.id}>
            {" "}
            <GameCard game={item} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
