"use client";
import { Season } from "@/types";
import React from "react";
import EpisodeCardSm from "./EpisodeCardSm";

type Props = { season: Season };

export default function EpisodesDropdown({ season }: Props) {
  return (
    <>
      <div className="flex flex-row flex-wrap bg-gray-950">
        {season.episodes.map((episode, i) => {
          return <EpisodeCardSm key={i} episode={episode} />;
        })}
      </div>
    </>
  );
}
