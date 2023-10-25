import React from "react";
import getGenres from "@/lib/getGenres";
import { Genre } from "@/types";
import Link from "next/link";

export default async function Sidebar() {
  const genres: { movie: Genre[]; tv: Genre[] } = await getGenres();

  return (
    <div className=" grid col-span-1 mr-7 mt-24 s:hidden">
      <section className="pl-4">
        <h3>Genres</h3>
        <div>
          <h4>Movies</h4>
          <ul>
            {genres.movie.map((genre) => {
              return (
                <li key={genre.name}>
                  <Link href={`/genres/movie/${genre.name}`}>{genre.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h4>TV</h4>
          <ul>
            {genres.tv.map((genre) => {
              return (
                <li key={genre.name}>
                  <Link href={`/genres/tv/${genre.name}`}>{genre.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
