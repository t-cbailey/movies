"use client";
import { Credit, Movie, Prog, Tv } from "@/types";
import generateImgUrl from "@/utils/images/generateImgUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import fallbackImg from "../../../../public/fallbackImg.png";

type Props = { prog: Tv | Movie | Credit };

export default function PosterCard({ prog }: Props) {
  const { type } = prog;

  let imgUrl = "";

  if (prog.backdrop_path) imgUrl = generateImgUrl(200, prog.backdrop_path);
  if (prog.poster_path) imgUrl = generateImgUrl(200, prog.poster_path);

  const fallback = fallbackImg,
    alt = "prog.name",
    src = imgUrl;

  const [error, setError]: any = React.useState(null);

  React.useEffect(() => {
    setError(null);
  }, [src]);

  return (
    <>
      <Link href={`/${type}/${prog.id}`}>
        <Image
          placeholder="empty"
          onError={setError}
          src={error ? fallback : src}
          alt={alt}
          width={200}
          height={300}
          style={{ width: "200px", height: "auto" }}
        />

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
