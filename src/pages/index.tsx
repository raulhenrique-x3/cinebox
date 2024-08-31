import React from "react";
import Header from "@/components/Header/Header";
import MovieCard from "@/components/MovieCard/MovieCard";
import { useGetPopularMovieData } from "@/services/homeData";
import { Box, Skeleton, Text } from "@chakra-ui/react";
import styles from "./index.module.scss";
import Footer from "@/components/Footer/Footer";
export default function Page() {
  const { data, error, isLoading, isError } = useGetPopularMovieData();

  if (isError || error)
    return (
      <Box>
        <Text fontSize={64}>Failed to get movies</Text>
      </Box>
    );

  if (isLoading)
    return (
      <Box>
        <Header />

        <div className={styles.movieCardContainer}>
          {Array.from({ length: 20 }).map((_, index) => (
            <Skeleton
              key={index}
              width={"100%"}
              height={560}
              borderRadius={"10px"}
            />
          ))}
        </div>
      </Box>
    );

  return (
    <Box>
      <Header />
      <div className={styles.movieCardContainer}>
        {data?.results?.map((movie) => (
          <MovieCard
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            adult={movie.adult}
            genre_ids={movie.genre_ids}
            id={movie.id}
            original_language={movie.original_language}
            original_title={movie.original_title}
            overview={movie.overview}
            popularity={movie.popularity}
            release_date={movie.release_date}
            title={movie.title}
            video={movie.video}
            vote_average={movie.vote_average}
            vote_count={movie.vote_count}
            key={movie.id}
          />
        ))}
      </div>
      <Footer />
    </Box>
  );
}
