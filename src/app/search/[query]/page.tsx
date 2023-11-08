import { getMovieData, getTvData, getPersonData } from "@/lib/getData";
import React from "react";
import PersonCarousel from "@/app/components/CarouselItems/PersonCarousel";
import ProgCarousel from "@/app/components/CarouselItems/ProgCarousel";
import BackToHome from "@/app/components/BackToHome";

type Props = { params: { query: string } };

export function generateMetadata({ params: { query } }: Props) {
  return { title: `Results for ${query} ` };
}

export default async function Search({ params: { query } }: Props) {
  const [movieRes, tvRes, personRes] = [
    getMovieData(`search/movie?query=${query}`, "movie"),
    getTvData(`search/tv?query=${query}`, "tv"),
    getPersonData(`search/person?query=${query}`, "person"),
  ];

  const [movies, tv, person] = await Promise.all([movieRes, tvRes, personRes]);

  return (
    <>
      <BackToHome />
      <h2 className=" text-2xl ml-4">
        <span className="text-orange-400">Results for </span> &quot;
        {query.replaceAll("%20", " ")}&quot;
      </h2>
      {movies && <ProgCarousel progArr={movies} heading="Movies" />}
      {tv && <ProgCarousel progArr={tv} heading="Tv" />}
      {person && <PersonCarousel personArr={person} heading="People" />}
    </>
  );
}
