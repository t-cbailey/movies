import React from "react";
import { Movie } from "@/types";

type Props = { prog: Movie };

export default function MovieDetails({ prog }: Props) {
  return (
    <section className="m-4 w-2/3">
      <div className="flex flex-row flex-wrap items-end">
        <h2 className="text text-6xl font-bold mr-4">{prog.title}</h2>
        <span className="text-base font-normal">
          {Math.round(prog.vote_average * 10) / 10} ⭐
          {<span className="ml-4">{prog.runtime}</span>} mins
        </span>
      </div>
      <p className="text-base italic">{prog.tagline}</p>
      <p className="mt-4">{prog.overview}</p>
    </section>
  );
}
