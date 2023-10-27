import { getMovieData, getPersonData, getTvData } from "@/lib/getData";
import { link } from "fs";
import React from "react";
import { Movie, Person, Tv } from "@/types";
import PosterCard from "@/app/components/PosterCard";
import { addProgType } from "@/utils/addProgType/addProgType";
import ProgCarousel from "@/app/components/ProgCarousel";

type Props = { params: { query: string } };

export default async function Search({ params: { query } }: Props) {
  const [movieRes, tvRes, personRes] = [
    getMovieData(`search/movie?query=${query}`, "movie"),
    getTvData(`search/tv?query=${query}`, "tv"),
    getPersonData(`search/person?query=${query}`, "person"),
  ];

  const [movies, tv, person] = await Promise.all([movieRes, tvRes, personRes]);

  if (movies && tv && person) {
    return (
      <>
        <h2 className="mt-24">results for {query} </h2>
        <ProgCarousel progArr={movies} heading="Movies" />
        <ProgCarousel progArr={tv} heading="Tv" />
        <ProgCarousel progArr={person} heading="People" />
      </>
    );
  }
}