import React from "react";
import { Prog } from "@/types";
import ProgCarousel from "../components/ProgCarousel";
import { getProgData } from "@/utils/getData";

export default async function Trending() {
  const discoverMovies: Prog[] = await getProgData("discover/movie");
  const discoverTV: Prog[] = await getProgData("discover/tv");
  const trendingMovies: Prog[] = await getProgData("trending/movie/day");
  const popularMovies: Prog[] = await getProgData("movie/top_rated");
  const trendingTV: Prog[] = await getProgData("trending/tv/day");
  const popularTV: Prog[] = await getProgData("tv/top_rated");

  const discover = [...discoverMovies, ...discoverTV];

  discover.sort((a, b) => {
    if (a.vote_average > b.vote_average) {
      return -1;
    }
    if (a.vote_average < b.vote_average) {
      return 1;
    } else return 0;
  });

  return (
    <>
      <ProgCarousel progArr={discover} heading={"Discover"} type={"movie"} />
      <ProgCarousel
        progArr={trendingMovies}
        heading={"Trending Movies"}
        type={"movie"}
      />
      <ProgCarousel
        progArr={popularMovies}
        heading={"Popular Movies"}
        type={"movie"}
      />
      <ProgCarousel progArr={trendingTV} heading={"Trending TV"} type={"tv"} />
      <ProgCarousel progArr={popularTV} heading={"Popular TV"} type={"tv"} />
    </>
  );
}
