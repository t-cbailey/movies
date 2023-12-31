import { Episode } from "@/types";
import React from "react";
import EpisodeIMG from "../EpisodeIMG";

type Props = { episode: Episode };

export default function EpisodeCardSm({ episode }: Props) {
  return (
    <>
      <div className="flex flex-row flex-wrap m-4 w-full">
        <EpisodeIMG episode={episode} />

        <section className="m-4 l:w-2/3">
          <div className="flex flex-row flex-wrap items-end">
            <h2 className="text text-3xl font-bold mr-4 ">{episode.name}</h2>
            <p className="text-base font-normal">
              {Math.round(episode.vote_average * 10) / 10} ⭐
              {<span className="ml-4">{episode.runtime}</span>} mins
            </p>
          </div>
          <p className="mt-4 w-full">{episode.overview}</p>
        </section>
      </div>
    </>
  );
}
