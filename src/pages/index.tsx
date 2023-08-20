import Header from "@/components/Header/Header";
import MovieCard from "@/components/MovieCard/MovieCard";
import { useGetPopularMovieData } from "@/services/homeData";
import { Box, Text } from "@chakra-ui/react";
import styles from "./index.module.scss";
export default function Page() {
  const { data, error, isLoading, isError } = useGetPopularMovieData();

  if (isError)
    return (
      <Box>
        <Text>Failed to get movies</Text>
      </Box>
    );

  return (
    <Box>
      <Header />
      <div className={styles.movieCardContainer}>
        {data?.results.map((movie) => (
          <MovieCard
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            adult={movie.adult}
            genre_ids={movie.genre_ids}
            id={movie.id}
            original_language={movie.original_language}
            original_title={movie.original_title}
            overview={movie.overview}
            popularity={0}
            release_date={movie.release_date}
            title={movie.title}
            video={false}
            vote_average={0}
            vote_count={0}
            key={movie.id}
          />
        ))}
      </div>
    </Box>
  );
}
