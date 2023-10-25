import React from "react";
import getGenres from "@/lib/getGenres";
import { Genre } from "@/types";
import Link from "next/link";

export default async function Sidebar() {
  const genres: Genre[] = await getGenres();

  return (
    <div className=" grid col-span-1 mr-7 mt-24 s:hidden">
      <section>
        <h3>Genres</h3>
        <ul>
          {genres.map((genre) => {
            return (
              <li key={genre.name}>
                <Link href="/">{genre.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
