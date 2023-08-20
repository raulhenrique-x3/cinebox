import { Skeleton } from "@chakra-ui/react";
import React from "react";

interface ICardSkeleton {
  isLoaded: boolean;
}

const CardSkeleton: React.FC<ICardSkeleton> = ({ isLoaded }) => {
  return (
    <Skeleton>
      <div>contents wrapped</div>
      <div>wont be visible</div>
    </Skeleton>
  );
};

export default CardSkeleton;
