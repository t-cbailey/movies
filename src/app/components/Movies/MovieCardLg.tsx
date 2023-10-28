import React from "react";
import { Movie } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
type Props = { prog: Movie };

export default function MovieDetails({ prog }: Props) {
  const imgUrl = generateImgUrl(200, prog.poster_path);
  return (
    <div className="flex flex-row flex-wrap">
      <Image
        className="ml-2 m-w-1/3 max-h-[300px]"
        src={imgUrl}
        alt={prog.title}
        width={200}
        height={300}
      />
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
    </div>
  );
}
