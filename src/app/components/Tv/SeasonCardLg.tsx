import { Season, Tv } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import React from "react";

type Props = {
  season: Season;
};

export default function SeasonCardLg({ season }: Props) {
  const imgUrl = generateImgUrl(200, season.poster_path);

  return (
    <div className="flex flex-row flex-wrap">
      <Image src={imgUrl} alt={season.name} width={200} height={300} />
      <section className="m-4 w-2/3 self-center">
        <div className="flex flex-row flex-wrap items-end">
          <h2 className="text text-6xl font-bold mr-4">{season.name}</h2>
          <span className="text-base font-normal">
            {Math.round(season.vote_average * 10) / 10} ⭐
            {<span className="ml-4">{season.episodes.length} episodes</span>}
          </span>
        </div>
        <p className="mt-4">{season.overview}</p>
      </section>
    </div>
  );
}
