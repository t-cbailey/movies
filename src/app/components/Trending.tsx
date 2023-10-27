import React from "react";
import { Movie, Prog, Tv } from "@/types";
import ProgCarousel from "../components/ProgCarousel";
import { getMovieData, getTvData, getPersonData } from "@/lib/getData";
import { addProgType } from "@/utils/addProgType/addProgType";

export default async function Trending() {
  const [discoverMovies, trendingMovies, popularMovies]: Movie[][] = [
    await getMovieData("discover/movie", "movie"),
    await getMovieData("trending/movie/day", "movie"),
    await getMovieData("movie/top_rated", "movie"),
  ];

  const [discoverTV, trendingTV, popularTV]: Tv[][] = [
    await getTvData("discover/tv", "tv"),
    await getTvData("trending/tv/day", "tv"),
    await getTvData("tv/top_rated", "tv"),
  ];

  let discover = [...discoverMovies, ...discoverTV].sort((a, b) => {
    if (a.vote_average > b.vote_average) {
      return -1;
    }
    if (a.vote_average < b.vote_average) {
      return 1;
    } else return 0;
  });

  return (
    <>
      <ProgCarousel progArr={discover} heading={"Discover"} />
      <ProgCarousel progArr={trendingMovies} heading={"Trending Movies"} />
      <ProgCarousel progArr={popularMovies} heading={"Popular Movies"} />
      <ProgCarousel progArr={trendingTV} heading={"Trending TV"} />
      <ProgCarousel progArr={popularTV} heading={"Popular TV"} />
    </>
  );
}
