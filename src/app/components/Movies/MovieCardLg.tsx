import React from "react";
import { Movie } from "@/types";
import ProgIMG from "../ProgIMG";
import Link from "next/link";

type Props = { prog: Movie };

export default function MovieDetails({ prog }: Props) {
  return (
    <div className="flex m:flex-row m:flex-wrap flex-col place-items-center">
      <ProgIMG prog={prog} />
      <section className="m-4 m:w-2/3">
        <div className="flex flex-row flex-wrap items-end">
          <h2 className="text text-6xl font-bold mr-4">{prog.title}</h2>
          <span className="text-base font-normal">
            {Math.round(prog.vote_average * 10) / 10} ⭐
            {<span className="ml-4">{prog.runtime}</span>} mins
          </span>
        </div>
        <p className="text-base italic">{prog.tagline}</p>
        <p className="mt-4">{prog.overview}</p>
        <div className="flex flex-row mt-4 flex-wrap">
          {prog.genres.map((genre, i) => {
            const genreLink = genre.name.replaceAll(" ", "_");
            return (
              <React.Fragment key={i}>
                <Link href={`/genres/${prog.type}/${genreLink}`}>
                  <p className="m-2 p-1 border border-orange-400 rounded-full ">
                    {genre.name}
                  </p>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </section>
    </div>
  );
}
