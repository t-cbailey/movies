import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Tv } from "@/types";

type Props = {
  season: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  };
  imgUrl: string;
  prog: Tv;
};

export default function SeasonCardSm({ season, imgUrl, prog }: Props) {
  return (
    <>
      <Link
        href={`/tv/${prog.id}/season/${season.season_number}`}
        className=" w-1/4 m-4"
      >
        <section className=" flex flex-row items-center mb-4 hover:bg-gray-900">
          <Image
            priority={true}
            src={imgUrl}
            width={100}
            height={200}
            alt={season.name}
          />
          <div className="ml-4">
            <h2 className="text-lg ">{season.name}</h2>
            <p className="text-orange-200 text-sm">
              {season.episode_count} episodes
            </p>
            {Math.round(season.vote_average * 10) / 10} ⭐
          </div>
        </section>
      </Link>
    </>
  );
}
