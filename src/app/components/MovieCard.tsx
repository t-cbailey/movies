import React from "react";
import { Movie } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";

type Props = { movie: Movie };

export default function MovieCard({ movie }: Props) {
  const imgUrl = generateImgUrl(300, movie.poster_path);

  return (
    <>
      <div className="border border-red-100">
        <img src={imgUrl} alt={movie.name} />
      </div>
    </>
  );
}
