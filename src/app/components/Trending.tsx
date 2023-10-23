import React from "react";
import api from "../../../utils/axios/axiosConfig";
import MovieCard from "./MovieCard";
import { Movie } from "@/types";

export default async function Trending() {
  const getTrendingMovies = await api.get("trending/all/day?language=en-US");
  const { data } = getTrendingMovies;
  const { results } = data;

  return (
    <article className="mt-50">
      <h1>Featured</h1>
      <ul className="flex flex-row">
        {results.map((movie: Movie) => {
          return (
            <>
              <li key={movie.name}>
                <MovieCard movie={movie} />
              </li>
            </>
          );
        })}
      </ul>
    </article>
  );
}
