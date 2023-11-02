import { Tv } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = { prog: Tv };

export default function TvCardLg({ prog }: Props) {
  const imgUrl = generateImgUrl(200, prog.poster_path);
  return (
    <div className="flex flex-row flex-wrap text-white ">
      <Image
        src={imgUrl}
        alt={prog.name}
        width={200}
        height={300}
        className="ml-2"
        style={{ width: "200px", height: "300px" }}
      />
      <section className="m-4 w-2/3">
        <div className="flex flex-row flex-wrap items-end">
          <h2 className="text text-6xl font-bold mr-4">{prog.name}</h2>
          <span className="text-base font-normal">
            {Math.round(prog.vote_average * 10) / 10} ⭐
            {<span className="ml-4">{prog.number_of_seasons}</span>} seasons
          </span>
        </div>
        <p className="text-base italic">{prog.tagline}</p>
        <p className="mt-4">{prog.overview}</p>
        <div className="flex flex-row mt-4 flex-wrap">
          {prog.genres.map((genre, i) => {
            return (
              <React.Fragment key={i}>
                <Link
                  href={`/genres/${prog.type}/${genre.name.replaceAll(
                    " ",
                    "_"
                  )}`}
                >
                  <p className="m-2 p-1 border border-orange-400 rounded-full hover:text-orange-400 hover:border-white">
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
