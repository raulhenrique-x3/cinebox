import { IMovieResponse } from "@/interfaces/movie";
import { useQuery } from "react-query";

const API_DOMAIN = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export async function getPopularMovieData(): Promise<IMovieResponse> {
  try {
    const res = await fetch(
      `${API_DOMAIN}movie/popular?api_key=${API_KEY}&language=en-US`
    );
    return res.json();
  } catch (error) {
    throw new Error("Failed to fetch data", error as Error);
  }
}

export function useGetPopularMovieData() {
  return useQuery<IMovieResponse>("popularMovie", getPopularMovieData);
}
