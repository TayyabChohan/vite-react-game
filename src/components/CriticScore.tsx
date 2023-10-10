import { Badge } from "@chakra-ui/react";
import React from "react";
interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <>
      <Badge colorScheme={color} fontSize={17} borderRadius={4} paddingX={5}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
