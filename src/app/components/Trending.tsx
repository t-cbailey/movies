import React from "react";
import { Prog } from "@/types";
import ProgCarousel from "../components/ProgCarousel";
import { getProgData } from "@/utils/getData";

export default async function Trending() {
  const trendingMovies: Prog[] = await getProgData("trending/movie/day");
  const trendingTV: Prog[] = await getProgData("trending/tv/day");
  const popularTV: Prog[] = await getProgData("tv/top_rated");
  const popularMovies: Prog[] = await getProgData("movie/top_rated");
  return (
    <>
      <ProgCarousel progArr={trendingMovies} heading={"Trending Movies"} />
      <ProgCarousel progArr={trendingTV} heading={"Trending TV"} />
      <ProgCarousel progArr={popularTV} heading={"Popular Movies"} />
      <ProgCarousel progArr={popularMovies} heading={"Popular TV"} />
    </>
  );
}
