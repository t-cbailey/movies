import { Credit, Movie, Tv } from "@/types";
import Link from "next/link";
import React from "react";
import ProgIMG from "../ProgIMG";

type Props = { prog: Tv | Movie | Credit };

export default function PosterCard({ prog }: Props) {
  const { type } = prog;

  return (
    <>
      <Link href={`/${type}/${prog.id}`}>
        <ProgIMG prog={prog} />
        <h4 className="text-white w-4/5 pl-2 pt-2 text-sm line-clamp-3  text-ellipsis">
          {type === "movie" ? prog.title : prog.name}
        </h4>
        {prog.vote_average && (
          <p className="pl-2 text-white">
            {Math.round(prog.vote_average * 10) / 10} ⭐
          </p>
        )}
      </Link>
    </>
  );
}
