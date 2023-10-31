import React from "react";
import { Movie } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";

type Props = { prog: Movie };

export default function MovieDetails({ prog }: Props) {
  const imgUrl = generateImgUrl(200, prog.poster_path);
  return (
    <div className="flex flex-row flex-wrap">
      <Image
        className="ml-2"
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
        <div className="flex flex-row mt-4 flex-wrap">
          {prog.genres.map((genre, i) => {
            return (
              <React.Fragment key={i}>
                <Link href={`/genres/${prog.type}/${genre.name}`}>
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
