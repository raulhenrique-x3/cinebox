import { IMovie } from "@/interfaces/movie";
import { Box, Button, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./movieCard.module.scss";
import { formatDateToMonthYear } from "@/utils/dateTransformation";
import { useCart } from "@/hooks/useCart";

const IMAGE_URL = process.env.NEXT_PUBLIC_IMAGE_URL;

const MovieCard: React.FC<IMovie> = ({
  poster_path,
  backdrop_path,
  title,
  release_date,
}) => {
  const { updateCart } = useCart();
  const moviePrice = (290 * Math.random() + 10).toFixed(2) as unknown as number;
  return (
    <div className={styles.movieCardContainer}>
      <Box
        width={"20%"}
        position={"absolute"}
        zIndex={2}
        className={styles.movieCardHover}
      >
        <Text fontSize="2xl" color={"#fff"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text fontSize="lg" color={"#fff"}>
          {formatDateToMonthYear(release_date)}
        </Text>
        <Text fontSize="lg" fontWeight={"extrabold"} color={"#fff"}>
          ${moviePrice}
        </Text>
        <Button
          onClick={() =>
            updateCart("add", {
              id: title,
              qnt: 1,
              price: moviePrice,
              title,
              img: IMAGE_URL + poster_path,
            })
          }
          className={styles.movieCardButton}
        >
          Buy
        </Button>
      </Box>
      <Image
        src={IMAGE_URL + poster_path}
        alt={IMAGE_URL + backdrop_path}
        width={312}
        height={560}
        className={styles.movieCardImage}
      />
    </div>
  );
};

export default MovieCard;
