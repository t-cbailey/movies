import React from "react";
import { Prog } from "@/types";
import ProgCarousel from "../components/ProgCarousel";
import { getProgData } from "@/lib/getData";
import { addProgType } from "@/utils/addProgType/addProgType";

export default async function Trending() {
  // const discoverMovies: Prog[] = await getProgData("discover/movie");
  // const discoverTV: Prog[] = await getProgData("discover/tv");
  // const trendingMovies: Prog[] = await getProgData("trending/movie/day");
  // const popularMovies: Prog[] = await getProgData("movie/top_rated");
  // const trendingTV: Prog[] = await getProgData("trending/tv/day");
  // const popularTV: Prog[] = await getProgData("tv/top_rated");

  const [discoverMovies, trendingMovies, popularMovies] = [
    await getProgData("discover/movie"),
    await getProgData("trending/movie/day"),
    await getProgData("movie/top_rated"),
  ].map((arr) => {
    return addProgType(arr, "movie");
  });

  const [discoverTV, trendingTV, popularTV] = [
    await getProgData("discover/tv"),
    await getProgData("trending/tv/day"),
    await getProgData("tv/top_rated"),
  ].map((arr) => {
    return addProgType(arr, "tv");
  });

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
