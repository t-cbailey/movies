"use client";
import { Season } from "@/types";
import React from "react";

import generateImgUrl from "@/utils/images/generateImgUrl";
import EpisodeCardSm from "./EpisodeCardSm";

type Props = { season: Season };

export default function EpisodesDropdown({ season }: Props) {
  return (
    <>
      <div className="flex flex-row flex-wrap bg-gray-950">
        {season.episodes.map((episode, i) => {
          const imgUrl = generateImgUrl(200, episode.still_path);
          return <EpisodeCardSm key={i} episode={episode} imgUrl={imgUrl} />;
        })}
      </div>
    </>
  );
}
