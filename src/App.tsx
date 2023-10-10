import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "../src/components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { Platform } from "./hooks/usePlatForm";
import { useState } from "react";
import PtlateFormSelector from "./components/PtlateFormSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [gamequery, setGamequery] = useState<GameQuery>({} as GameQuery);
  return (
    <>
      <div>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav">
            <NavBar
              onSearch={(searchText) =>
                setGamequery({ ...gamequery, searchText })
              }
            />
          </GridItem>
          <Show above="lg">
            <GridItem area="aside" padding={5}>
              <GenreList
                selectedGenre={gamequery.genre}
                onSelectGenre={(genre) => setGamequery({ ...gamequery, genre })}
              />
            </GridItem>
          </Show>

          <GridItem area="main">
              <GameHeading gameQuery={gamequery} />
            <HStack paddingLeft={10}>
              <PtlateFormSelector
                isSelectedPlatForm={gamequery.platform}
                onSelectPlatForm={(platform) =>
                  setGamequery({ ...gamequery, platform })
                }
              />
              <SortSelector
                onSelectedSortOrder={(sortOrder) =>
                  setGamequery({ ...gamequery, sortOrder })
                }
                sortOrder={gamequery.sortOrder}
              />
            </HStack>
            <GameGrid gamequery={gamequery} />
          </GridItem>
        </Grid>
      </div>
    </>
  );
}

export default App;
